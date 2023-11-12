import { Optional } from "sequelize";
import Video from "../entities/video";

export interface VideoInput extends Optional<Video, 'id'>{}
export interface VideoOutput extends Required<Video>{}