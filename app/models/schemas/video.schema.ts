import { Schema, model } from "mongoose";
import { IVideo } from "../interfaces/iVideo";

export const videoSchema : Schema = new Schema<IVideo>({
    name: String,
    date: {
        type : Date,
        default : Date.now()
    },
    title: {
        type : String,
        required: true
    },
    description: String,
    resolution: String
},{
    statics: {
        findVideoByName(name : string) {
            return this.find({ name: new RegExp(name, "i") })
        }
    }
});

// videoSchema.statics.findVideoByName = function(name : string) {
//     return this.find({ name: new RegExp(name, "i") });
// }