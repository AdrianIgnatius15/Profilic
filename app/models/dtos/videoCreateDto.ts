import { AutoMap } from "@automapper/classes";

export class VideoCreateDto {
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
}