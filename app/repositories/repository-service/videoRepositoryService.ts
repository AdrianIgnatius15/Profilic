import { VideoInput, VideoOutput } from "../../models/interfaces/video-input-output-model";
import { GetAllVideosFilter } from "../filters/filters.types";
import * as VideoRepository from '../repository/video-repository';

export const createVideo = (payload: VideoInput) : Promise<VideoOutput> => {
    return VideoRepository.create(payload);
};

export const updateVideo = (id: number, payload : Partial<VideoOutput>) : Promise<VideoOutput> => {
    return VideoRepository.update(id, payload);
};

export const getVideoById = (id: number) : Promise<VideoOutput> => {
    return VideoRepository.getById(id);
}

export const deleteVideoById = (id : number) : Promise<boolean> => {
    return VideoRepository.deleteById(id);
};

export const getAllVideos = (filters: GetAllVideosFilter) : Promise<VideoOutput[]> => {
    return VideoRepository.getAll(filters);
};