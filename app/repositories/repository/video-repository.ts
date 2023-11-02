import { Op } from "sequelize";
import { VideoInput, VideoOutput } from "../../models/interfaces/video-input-output-model";
import Video from "../../models/video";
import { GetAllVideosFilter } from "../filters/filters.types";
import { Service } from "typedi";
import { VideoCreateDto } from "../../models/dtos/videoCreateDto";
import VideoReadDto from "../../models/dtos/videoReadDto";

@Service()
export class VideoRepository {
    constructor(){}

    public async createVideo(payload : VideoCreateDto) : Promise<Video> {
        let video : Video = await Video.create({...payload});
        return video;
    }

    public async updateVideo(id : number, payload: Partial<VideoCreateDto>) : Promise<Video> {
        let video : Video | null = await Video.findByPk(id);

        if(!video) {
            throw new Error(`Video with the ID of ${id} cannot be found`);
        }
        let updatedVideo : Video = await (video).update(payload);
        return updatedVideo;
    }

    public async getByVideoById(id : number) : Promise<Video> {
        let video : Video | null = await Video.findByPk(id);

        if(!video) {
            throw new Error(`Video with the ID of ${id} cannot be found`);
        } else {
            return video;
        }
    }

    public async deleteVideoById (id : number) : Promise<boolean> {
        const deletedVideoStatus = await Video.destroy({
            where: { id }
        });

        return !!deletedVideoStatus;
    }

    public async getAllVideos(filters? : GetAllVideosFilter) : Promise<Video[]> {
        return await Video.findAll({
            where: {
                ...filters?.isDeleted && { deletedAt: { [Op.not]: null } }
            },
            ...((filters?.isDeleted || filters?.includedDeleted) && {paranoid: true})
        });
    };

}
// export const create = async (payload: VideoInput) : Promise<Video> => {
//     let video : Video = await Video.create(payload);
//     return video;
// };

// export const update = async (id: number, payload: Partial<VideoInput>) : Promise<Video> => {
//     let video : Video | null = await Video.findByPk(id);

//     if(!video) {
//         throw new Error(`Video with the ID of ${id} cannot be found`);
//     }
//     let updatedVideo : Video = await (video).update(payload);
//     return updatedVideo;
// };

// export const getById = async (id: number) : Promise<Video> => {
//     let video : Video | null = await Video.findByPk(id);

//     if(!video) {
//         throw new Error(`Video with the ID of ${id} cannot be found`);
//     } else {
//         return video;
//     }
// };

// export const deleteById = async (id : number) : Promise<boolean> => {
//     const deletedVideoStatus = await Video.destroy({
//         where: { id }
//     });

//     return !!deletedVideoStatus;
// };

// export const getAll = async (filters? : GetAllVideosFilter) : Promise<VideoOutput[]> => {
//     return Video.findAll({
//         where: {
//             ...filters?.isDeleted && { deletedAt: { [Op.not]: null } }
//         },
//         ...((filters?.isDeleted || filters?.includedDeleted) && {paranoid: true})
//     });
// };