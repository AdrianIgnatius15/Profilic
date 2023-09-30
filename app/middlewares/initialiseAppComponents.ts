import { createMap } from "@automapper/core";
import { DatabaseConnection } from "../database/databaseConnection";
import { mapper } from "./mapper-middleware";
import VideoReadDto from "../models/dtos/videoReadDto";
import Video from "../models/entities/video";
import { VideoInput } from "../models/interfaces/video-input-output-model";
import { VideoCreateDto } from "../models/dtos/videoCreateDto";

/**
 * ## Initialise App Components
 * #### Initialises all components and middlewares
 * 
 * This is where all middlewares and components will be initialised for the whole REST API application
 * Any middleware and component that needs to be initialised must be called here first in a method/function
 * 
 * That method/function is then called in main.ts
 * 
 * @author Adrian Joseph
 * @copyright all rights reserved.
 */
export class InitialiseAppComponents {

    /**
     * ### Initialise Database
     * #### Initialises database which will be handle by "Sequelize" library.
     * 
     * This method/function will initialise the database and creates the tables which is emulated by the data models.
     * The data models which has "init" which is extended from "Model" where it helps to initialise the data model into a table in database.
     * The "sync" method/function here will execute the said process mentioned when the REST API starts.
     * 
     * @example class User extends Model {
     *      id: number
     *      // all properties
     *      
     *      User.init({
     *          id: {
     *              type: DataTypes.INTEGER.UNSIGNED,
     *              autoIncrement: true,
     *              primaryKey: true,
     *          }
     *      }, {
     *          timestamps: true,
     *          sequelize: DatabaseConnection,
     *          paranoid: true
     *      });
     * }
     * 
     * @author Adrian Joseph
     * @copyright All rights reserved
     */
    public initialiseDatabase() : void {
        DatabaseConnection.sync();
    }

    /**
     * ### Create Map
     * #### Initialises a mapper for an entity data model and a DTO data model
     * 
     * This class creates a mapper the said entity and DTO model using a library called "AutoMapper"
     * 
     * @example createMap(mapper, Source, Destination);

     * To understand this library, concept and more, head to the link below:
     *  @link https://automapperts.netlify.app
     *  @author Adrian Joseph
     *  @copyright Rights reserved to the author.
     */
    public createMappingsForDtoAndEntity() : void {
        createMap(mapper, Video, VideoReadDto);
    }
}