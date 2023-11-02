import { Inject, Service } from "typedi";
import Video from "../../models/entities/video";
import { VideoRepository } from "../repository/video-repository";
import { VideoCreateDto } from "../../models/dtos/videoCreateDto";
import { mapper } from "../../middlewares/mapper-middleware";
import VideoReadDto from "../../models/dtos/videoReadDto";

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

    async getAllVideos() : Promise<VideoReadDto[]> {
        const videos = await this.videoRepository.getAllVideos();
        const videoReadDtos = mapper.mapArray(videos, Video, VideoReadDto);

        return videoReadDtos;
    }

    async createVideo(videoCreateDto : VideoCreateDto) : Promise<Video> {
        const createVideoResult = await this.videoRepository.createVideo(videoCreateDto);
        
        return createVideoResult;
    }

    async updateVideo(id : number, updatedVideo : Partial<Video>) : Promise<Video> {
        return await this.videoRepository.updateVideo(id, updatedVideo);
    }
}