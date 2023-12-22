import express, { Express, Response } from 'express';
import 'reflect-metadata';
import { appRouter } from './app/controllers/routers/appRouter';
import { InitialiseAppComponents } from './app/config/initialiseAppComponents';
import Container from 'typedi';

export const app: Express = express();
const initialiseAppComponents = Container.get(InitialiseAppComponents);
initialiseAppComponents.connectToCloudinaryServer();
initialiseAppComponents.connectToMongoDB();
const SERVER_PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

app.use(express.json());
app.use('/api/v1', appRouter);

app.use('/', (res: Response): void => {
    res.json({
        message: 'Hello from Profilic 🤟!'
    });
});

app.listen(SERVER_PORT, () => {
    console.log(`The server is up and live on port : ${SERVER_PORT} 🤟`);
});
