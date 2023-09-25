import { Sequelize } from "sequelize";

const isDevelopment : boolean = process.env.NODE_ENV === "Development";

export const DatabaseConnection = new Sequelize({
    dialect: 'sqlite',
    host: 'localhost',
    database: "profilic",
    logging: true,
});

export const initialiseDatabase = () => DatabaseConnection.sync();

// export const DatabaseConnection = new Sequelize({})