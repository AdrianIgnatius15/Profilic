import { model } from "mongoose";
import { IVideo } from "./interfaces/iVideo";
import { videoSchema } from "./schemas/video.schema";

export const Video = model<IVideo>("Video", videoSchema);