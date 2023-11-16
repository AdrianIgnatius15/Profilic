import { videoSchema } from '../models/schemas/video.schema';

videoSchema.static('findVideoByDescription', function findVideoByDescription(description: string) {
    return this.where({ description: new RegExp(description, 'i') });
});
