import { DatabaseConnection } from "../database/databaseConnection";

export class InitialiseAppComponents {
    public initialiseDatabase() : void {
        DatabaseConnection.sync();
    }
}