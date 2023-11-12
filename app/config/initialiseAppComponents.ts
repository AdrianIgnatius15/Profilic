import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logging from '../utilities/Logging';

dotenv.config();

export class InitialiseAppComponents {
    constructor() {}

    public connectToMongoDB() {
        const MONGO_USERNAME: string = process.env.MONGO_USERNAME || '';
        const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
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
}
