import { VideoInput, VideoOutput } from "../../models/interfaces/video-input-output-model";
import { GetAllVideosFilter } from "../filters/filters.types";

export interface IVideoRepositoryService {
    createVideo : (payload : VideoInput) => Promise<VideoOutput>;
    updateVideo : (id : number, payload : Partial<VideoOutput>) => Promise<VideoOutput>;
    getVideoById : (id : number) => Promise<VideoOutput>;
    deleteVideoById : (id : number) => Promise<boolean>;
    getAllVideos : (filters: GetAllVideosFilter) => Promise<VideoOutput[]>
}