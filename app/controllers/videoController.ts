import { Request, Response, Router } from 'express';
import { Video } from '../models/video';
import Logging from '../utilities/Logging';
import { Document } from 'mongoose';
import { IVideo } from '../models/interfaces/iVideo';
import { isNull, isUndefined } from 'lodash';

export const VideoController: Router = Router();

VideoController.post('/', async (request: Request<IVideo>, response: Response) => {
    // create a video, probably adding uploading as well
    await Video.create({
        name: request.params.name,
        date: request.params.date,
        description: request.params.description,
        resolution: request.params.resolution,
        title: request.params.title
    });

    return response.status(204).send('created Video!');
});

VideoController.delete('/:id', async (request: Request, response: Response<boolean>) => {
    // create a video, probably adding uploading as well
});

VideoController.get('/:id', async (request: Request, response: Response<any | string>) => {
    // Get a video by id.
    let videoFound = await Video.findById(request.params.id);

    if (!isNull(videoFound) || !isUndefined(videoFound)) {
        return response.status(200).json(videoFound);
    } else {
        return response.status(404).send("Oops, the video you're trying doesn't exists!");
    }
});

VideoController.get('/', async (__: Request, response: Response<Array<Document<IVideo>>>) => {
    // Get all videos
    return response.status(200).json(await Video.find());
});

VideoController.put('/:id', () => {
    // Update a video
});

VideoController.get('/name/:name', async (request: Request, response: Response<Document<IVideo> | string>) => {
    //Gets a video by name.
    if (request.params.name === undefined || request.params.name === '') {
        Logging.error(`Data passed ${request.params.name}`);
        return response.status(404).send("Oops, you didn't type the video name you wanted to search! Try again.");
    } else {
        const video = await Video.findVideoByName(String(request.params.name));

        if (video !== null || video !== undefined) {
            Logging.info(`Video data from MongoDB searched ${video}`);
            return response.status(200).send(video);
        } else {
            return response.status(404).send('There is no name of the video exists in database');
        }
    }
});
