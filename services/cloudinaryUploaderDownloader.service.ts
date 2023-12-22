import { UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import { InitialiseAppComponents } from '../app/config/initialiseAppComponents';
import Logging from '../app/utilities/logging/Logging';
import { Service } from 'typedi';

@Service()
export class CloudinaryUploaderDownloaderService {
    constructor(public appComponents: InitialiseAppComponents) {}

    public async uploadVideo(videoFile: Express.Multer.File) {
        this.appComponents.connectToCloudinaryServer();

        try {
            const result: UploadApiResponse | UploadApiErrorResponse | undefined = await new Promise(async (resolve, reject) => {
                if (videoFile !== undefined && videoFile.size > 0) {
                    await cloudinary.uploader.upload_large(
                        videoFile.path,
                        {
                            resource_type: 'video',
                            chunk_size: parseInt(process?.env.CLOUDINARY_CHUNK_SIZE_UPLOAD!!)
                        },
                        async (error, result) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                }
            });

            Logging.log(`Result of upload is ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            Logging.error(`Video could not be uploaded into Cloudinary and it's data is not saved into MongoDB due to ${JSON.stringify(error)}`);
            return null;
        }
    }
}
