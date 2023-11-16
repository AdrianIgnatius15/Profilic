import { Document, Model } from 'mongoose';
import { IVideo } from '../../models/interfaces/iVideo';

export interface IVideoRepository extends Model<IVideo> {
    findVideoByDescription(description: string): Document<IVideo>;
}
