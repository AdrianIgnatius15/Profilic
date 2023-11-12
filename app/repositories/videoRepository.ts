import { videoSchema } from "../models/schemas/video.schema";

export class VideoRepository {
    constructor(){}

    findVideoByName(name:string) {
        return videoSchema.statics.findVideoByName = async function(name) {
            return await this.find({ name: new RegExp(name, "i") });
        }
    }
}