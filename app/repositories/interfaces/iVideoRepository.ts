import { Document, Model } from 'mongoose';
import { IVideo } from '../../models/interfaces/iVideo';

export interface IVideoRepository extends Model<IVideo> {
    findVideoByName(name: string): Document<IVideo>;
}
