import { Inject, Service } from "typedi";
import Video from "../../models/entities/video";
import { VideoRepository } from "../repository/video-repository";
import { VideoInput } from "../../models/interfaces/video-input-output-model";
import { VideoCreateDto } from "../../models/dtos/videoCreateDto";

@Service()
export class VideoRepositoryService {
    constructor(
        @Inject()
        private videoRepository : VideoRepository
    ) {}

    async getVideoByID(id : number) : Promise<Video> {
        const video = await this.videoRepository.getByVideoById(id);

        return video
    }

    async getAllVideos() : Promise<Video[]> {
        const videos = await this.videoRepository.getAllVideos();

        return videos;
    }

    async createVideo(video : VideoCreateDto) : Promise<Video> {
        const createVideoResult = await this.videoRepository.createVideo(video);
        
        return createVideoResult;
    }

    async updateVideo(id : number, updatedVideo : Partial<Video>) : Promise<Video> {
        return await this.videoRepository.updateVideo(id, updatedVideo);
    }
}