import { Request, Response, Router } from "express";
import * as VideoRepositoryService from "../repositories/repository-service/videoRepositoryService";
import { VideoInput, VideoOutput } from "../models/interfaces/video-input-output-model";

export const VideoController : Router = Router();

VideoController.post("/", async (request : Request<VideoInput>, response : Response<VideoOutput>) => {
    // create a video, probably adding uploading as well
    const requestBody = request.body as VideoOutput;

    const result = await VideoRepositoryService.createVideo(requestBody);
    return response.status(204).send(result);
});
VideoController.delete("/:id", async (request : Request, response : Response<boolean>) => {
    // create a video, probably adding uploading as well
    const id = parseInt(request.params.id);

    const result = await VideoRepositoryService.deleteVideoById(id);
    return response.status(200).json(result);
});
VideoController.get("/:id", async (request : Request, response : Response<VideoOutput>) => {
    // Update a video
    const id : number = parseInt(request.params?.id);
    const result = await VideoRepositoryService.getVideoById(id);

    return response.status(200).json(result);
});
VideoController.put("/:id", () => {
    // create a video, probably adding uploading as well
    
});