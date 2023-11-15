import { videoSchema } from '../models/schemas/video.schema';

videoSchema.static('findVideoByName', function findVideoByName(name: string) {
    return this.where({ name: new RegExp(name, 'i') });
});
