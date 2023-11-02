import { AutoMap } from "@automapper/classes";

export class VideoCreateDto {
    @AutoMap()
    declare name : string;

    @AutoMap()
    date : Date = new Date();

    @AutoMap()
    declare title: string;

    @AutoMap()
    declare description: string;

    @AutoMap()
    declare resolution: string;
}