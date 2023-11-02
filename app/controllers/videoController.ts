import { Request, Response, Router } from "express";
import Container from "typedi";
import { VideoRepositoryService } from "../repositories/repository-service/videoRepositoryService";
import VideoReadDto from "../models/dtos/videoReadDto";
import { VideoCreateDto } from "../models/dtos/videoCreateDto";
import Video from "../models/entities/video";

export const VideoController : Router = Router();
const videoRepositoryInstance = Container.get(VideoRepositoryService);

VideoController.post("/", async (request : Request<VideoCreateDto>, response : Response<Video>) => {
    // create a video, probably adding uploading as well
    const requestBody = request.body as VideoCreateDto;

    const result = await videoRepositoryInstance.createVideo(requestBody);
    return response.status(204).send(result);
});

VideoController.delete("/:id", async (request : Request, response : Response<boolean>) => {
    // create a video, probably adding uploading as well
    const id = parseInt(request.params.id);

    // const result = await videoRepositoryInstance.deleteVideoById(id);
    return response.status(200).json(true);
});

VideoController.get("/:id", async (request : Request, response : Response<Video>) => {
    // Update a video
    const id : number = parseInt(request.params?.id);
    const result = await videoRepositoryInstance.getVideoByID(id);

    return response.status(200).json(result);
});

VideoController.get("/", async (request : Request, response : Response<VideoReadDto[]>) => {
    const videos = await videoRepositoryInstance.getAllVideos();

    if(videos.length >= 1) {
        return response.status(200).json(videos);
    } else {
        return response.status(404).json([]);
    }
});

VideoController.put("/:id", () => {
    // create a video, probably adding uploading as well
    
});