import { Schema } from 'mongoose';
import { IVideo } from '../interfaces/iVideo';
import { IVideoRepository } from '../../repositories/interfaces/iVideoRepository';

export const videoSchema = new Schema<IVideo, IVideoRepository>(
    {
        name: String,
        date: {
            type: Date,
            default: Date.now()
        },
        title: {
            type: String,
            required: true
        },
        description: String,
        resolution: String
    }
    // {
    //     statics: {
    //         findVideoByName(name: string) {
    //             return this.where({ name: new RegExp(name, 'i') });
    //         }
    //     }
    // }
);

videoSchema.static('findVideoByName', function findVideoByName(name: string) {
    return this.where({ name: new RegExp(name, 'i') });
});
