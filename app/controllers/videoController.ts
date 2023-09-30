import { Request, Response, Router } from "express";
import { VideoInput, VideoOutput } from "../models/interfaces/video-input-output-model";
import Container from "typedi";
import { VideoRepositoryService } from "../repositories/repository-service/videoRepositoryService";

export const VideoController : Router = Router();
const videoRepositoryInstance = Container.get(VideoRepositoryService);

VideoController.post("/", async (request : Request<VideoInput>, response : Response<VideoOutput>) => {
    // create a video, probably adding uploading as well
    const requestBody = request.body as VideoOutput;

    const result = await videoRepositoryInstance.createVideo(requestBody);
    return response.status(204).send(result);
});

VideoController.delete("/:id", async (request : Request, response : Response<boolean>) => {
    // create a video, probably adding uploading as well
    const id = parseInt(request.params.id);

    // const result = await videoRepositoryInstance.deleteVideoById(id);
    return response.status(200).json(true);
});

VideoController.get("/:id", async (request : Request, response : Response<VideoOutput>) => {
    // Update a video
    const id : number = parseInt(request.params?.id);
    const result = await videoRepositoryInstance.getVideoByID(id);

    return response.status(200).json(result);
});

VideoController.put("/:id", () => {
    // create a video, probably adding uploading as well
    
});