import { GetAllVideosFilter } from "../filters/filters.types";
import { Service } from "typedi";
import { VideoCreateDto } from "../../models/dtos/videoCreateDto";
import Video from "../../models/entities/video";
import { Op } from "sequelize";

@Service()
export class VideoRepository {
    constructor(){}

    public async createVideo(payload : VideoCreateDto) : Promise<Video> {
        // let video : Video = await Video.create({
        //     name: payload.name,
        //     date: payload.date,
        //     description : payload.description,
        //     resolution: payload.resolution,
        //     title: payload.title,
        // });
        let video : Video = await Video.create(payload);
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
        return await Video.findAll();
    };

}