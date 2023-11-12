import express, { Express, Request, Response }  from "express";
import { appRouter } from "./app/controllers/routers/appRouter";
import { InitialiseAppComponents } from "./app/config/initialiseAppComponents";

export const app : Express = express();
const intialiseAppComponents = new InitialiseAppComponents();
const SERVER_PORT : number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

app.use(express.json())
intialiseAppComponents.connectToMongoDB();
app.use("/api/v1", appRouter);

app.use("/", (res: Response): void => {
    res.json({
        "message": "Hello from Profilic 🤟!"
    });
});

app.listen(SERVER_PORT, () => {
    console.log(`The server is up and live on port : ${SERVER_PORT}`);
});