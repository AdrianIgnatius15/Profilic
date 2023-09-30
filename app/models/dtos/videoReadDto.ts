import { AutoMap } from "@automapper/classes";

export default class VideoReadDto {
    @AutoMap()
    id: number = 0;

    @AutoMap()
    name: string = "";

    @AutoMap()
    date: Date = new Date();

    @AutoMap()
    title : string = "";

    @AutoMap()
    description: string = "";

    @AutoMap()
    resolution: string = "";
};