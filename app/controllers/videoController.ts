import { Request, Response, Router } from 'express';
import { Video } from '../models/video';
import Logging from '../utilities/logging/Logging';
import { Document } from 'mongoose';
import { IVideo } from '../models/interfaces/iVideo';
import { isNull, isUndefined } from 'lodash';
import { TypedRequestBody } from '../utilities/request-body-models/typedRequestBody';
import { multerMiddleware } from '../middlewares/multer-middleware';
import { CloudinaryUploaderDownloaderService } from '../../services/cloudinaryUploaderDownloader.service';
import Container from 'typedi';

export const VideoController: Router = Router();
const cloudinaryDownloaderUploader = Container.get(CloudinaryUploaderDownloaderService);

VideoController.post('/uploadvideo', multerMiddleware.single('video'), (request: TypedRequestBody<IVideo>, response: Response<string | object>) => {
    // create a video, probably adding uploading as well
    (async () => {
        if (request.file !== undefined && request.file.size > 0) {
            const result = await cloudinaryDownloaderUploader.uploadVideo(request.file);

            if (result?.secure_url) {
                await Video.create({
                    name: request.body.name,
                    date: request.body.date,
                    description: request.body.description,
                    resolution: request.body.resolution,
                    title: request.body.title,
                    url: result?.secure_url?.toString()
                });

                return response.status(204).send('Uploaded the video successfully🤘!');
            } else if (result?.message) {
                Logging.error(`Error occured when uploading the video due to ${result?.message}`);

                return response.status(500).send({ error: result.message });
            }
        } else {
            return response.status(500).send(`There is no video to upload! You may want to attach the video😀`);
        }
    })();
});

VideoController.delete('/:id', (request: Request, response: Response<boolean>) => {
    // create a video, probably adding uploading as well
});

VideoController.get('/:id', (request: Request, response: Response<any>) => {
    // Get a video by id.
    (async () => {
        let videoFound = await Video.findById(request.params.id);

        if (!isNull(videoFound) || !isUndefined(videoFound)) {
            return response.status(200).json(videoFound);
        } else {
            return response.status(404).send("Oops, the video you're trying doesn't exists!");
        }
    })();
});

VideoController.get('/', (__: Request, response: Response<Array<Document<IVideo>>>) => {
    // Get all videos
    (async () => {
        return response.status(200).json(await Video.find());
    })();
});

VideoController.put('/:id', () => {
    // Update a video
});

VideoController.get('/name/:description', (request: Request, response: Response<Document<IVideo> | string>) => {
    //Gets a video by name.
    (async () => {
        if (request.params.description === undefined || request.params.description === '') {
            Logging.error(`Data passed ${request.params.description}`);
            return response.status(404).send("Oops, you didn't type the video description you wanted to search! Try again.");
        } else {
            Logging.error(`Data passed ${request.params.description}`);

            const video = Video.findVideoByDescription(String(request.params.description));

            if (video !== null || video !== undefined) {
                Logging.info(`Video data from MongoDB searched ${video.toJSON}`);
                return response.status(200).send(video);
            } else {
                return response.status(404).send('There is no description of the video exists in database');
            }
        }
    })();
});
