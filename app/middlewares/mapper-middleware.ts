import { createMapper } from "@automapper/core";
import { sequelize } from "@automapper/sequelize";
/**
 * ## Mapper
 * ### Mapper middleware which allows the whole REST API to map from entity to a data model
 * 
 * This middleware will be initialised at the beginning of the REST API application.
 * ##### ONLY ONE SINGLETON MAPPER FOR THE WHOLE OF THE REST API
 * To understand more, head to link below:
 * 
 * @link https://automapperts.netlify.app
 * @author Adrian Joseph
 * @copyright Rights reserved to the author.
 */
export const mapper = createMapper({
    strategyInitializer: sequelize(),
});