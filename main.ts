import express, { Express, Request, Response }  from "express";
import { appRouter } from "./app/controllers/routers/appRouter";
import 'reflect-metadata';
import { InitialiseAppComponents } from "./app/initialisers/initialiseAppComponents";

export const app : Express = express();
const initialiseDatabase = new InitialiseAppComponents();

app.use(express.json())
initialiseDatabase.initialiseDatabase();
initialiseDatabase.createMappingsForDtoAndEntity();
app.use("/api/v1", appRouter);

app.use("/", (res: Response): void => {
    res.json({
        "message": "Hello from Profilic 🤟!"
    });
});

app.listen(3000, () => {
    console.log(`The server is up and live on port : ${3000}`);
});