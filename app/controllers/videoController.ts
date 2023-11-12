import { Request, Response, Router } from "express";
import { Video } from "../models/video";
import { IVideo } from "../models/interfaces/iVideo";

export const VideoController : Router = Router();

VideoController.post("/", async (request : Request, response : Response) => {
    // create a video, probably adding uploading as well
    await Video.create({
        name: request.body.name,
        date: request.body.date,
        description: request.body.description,
        resolution: request.body.resolution,
        title: request.body.title
    });

    return response.status(204).send("created Video!");
});

VideoController.delete("/:id", async (request : Request, response : Response<boolean>) => {
    // create a video, probably adding uploading as well

});

VideoController.get("/:id", async (request : Request, response : Response) => {
    // Update a video

});

VideoController.put("/:id", () => {
    // create a video, probably adding uploading as well
    
});

VideoController.get('/:name', async (request : Request, response : Response<IVideo | string>) => {
    if(request.params.name !== undefined || request.params.name !== "") {
        return response.status(404).send("There is no name of the video you want to find");
    } else {
        // let video = new Video({});
        // video.findVideoByName();
    }
});