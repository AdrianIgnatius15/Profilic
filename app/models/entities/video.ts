import { Model } from "sequelize-typescript";
import { DatabaseConnection } from "../../database/databaseConnection";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import { AutoMap } from "@automapper/classes";

export default class Video extends Model<InferAttributes<Video>, InferCreationAttributes<Video>> {
    @AutoMap()
    id: CreationOptional<number> = 0;

    @AutoMap()
    name : string = "";

    @AutoMap()
    date : Date = new Date();

    @AutoMap()
    title: string = "";

    @AutoMap()
    description: string = "";

    @AutoMap()
    resolution: string = "";
    readonly createdAt: Date = new Date();
    readonly updatedAt: Date = new Date();
    readonly deletedAt: Date = new Date();
    version : number = 0;
}

Video.initialize({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    resolution: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    sequelize: DatabaseConnection,
    paranoid: true,
})