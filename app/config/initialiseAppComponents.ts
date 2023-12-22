import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logging from '../utilities/logging/Logging';
import { v2 as Cloudinary } from 'cloudinary';
import { Service } from 'typedi';

dotenv.config();

@Service()
export class InitialiseAppComponents {
    public connectToMongoDB() {
        const MONGO_USERNAME: string = process.env.MONGO_USERNAME ?? '';
        const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD ?? '';
        const MONGO_URL_CONNECTION: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@atlascluster.1fei5v2.mongodb.net/`;

        mongoose
            .connect(MONGO_URL_CONNECTION, { retryWrites: true, w: 'majority' })
            .then(() => {
                Logging.info('MongoDB which is in cloud has been successfully connected');
            })
            .catch((error) => {
                Logging.error('Unable to connect to MongoDB deployed to cloud');
                Logging.error(error);
            });
    }

    public connectToCloudinaryServer() {
        try {
            Cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET
            });
        } catch (error: unknown) {
            Logging.error(`Error occurred when connecting to Cloudinary due to ${error}`);
        }
    }
}
