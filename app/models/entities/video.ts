import { Model } from "sequelize-typescript";
import { DatabaseConnection } from "../../database/databaseConnection";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import { AutoMap } from "@automapper/classes";

export default class Video extends Model<InferAttributes<Video>, InferCreationAttributes<Video>> {
    @AutoMap()
    declare id: CreationOptional<number>;

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
    paranoid: true
})