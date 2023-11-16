import { Request, Response, Router } from 'express';
import { Video } from '../models/video';
import Logging from '../utilities/Logging';
import { Document } from 'mongoose';
import { IVideo } from '../models/interfaces/iVideo';
import { isNull, isUndefined } from 'lodash';

export const VideoController: Router = Router();

VideoController.post('/', (request: Request<IVideo>, response: Response) => {
    // create a video, probably adding uploading as well
    (async () => {
        await Video.create({
            name: request.params.name,
            date: request.params.date,
            description: request.params.description,
            resolution: request.params.resolution,
            title: request.params.title
        });
    })();

    return response.status(204).send('created Video!');
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
