import { model } from 'mongoose';
import { IVideo } from './interfaces/iVideo';
import { videoSchema } from './schemas/video.schema';
import { IVideoRepository } from '../repositories/interfaces/iVideoRepository';

export const Video = model<IVideo, IVideoRepository>('Video', videoSchema);
