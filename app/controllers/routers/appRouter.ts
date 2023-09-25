import { Router } from "express";
import { VideoController } from "../videoController";

export const appRouter = Router();

//Add your controllers here for Router to identify
appRouter.use('/video', VideoController);