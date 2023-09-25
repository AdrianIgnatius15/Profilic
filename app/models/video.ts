import { Model } from "sequelize-typescript";
import { DatabaseConnection } from "../database/databaseConnection";
import { DataTypes } from "sequelize";

export default class Video extends Model {
    id: number = 0;
    name : string = "";
    date : Date = new Date();
    title: string = "";
    description: string = "";
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
    paranoid: true
})