import mongoose, {Schema} from "mongoose";
import uuidv4 from "uuid";

const location = new Schema({
    uuid: {
        type: uuidv4(),
        primaryKey: true
    },
    coordinates: {
        latitude: {
            type: Number,
            nullable: false,
        },
        longitude: {
            type: Number,
            nullable: false
        },
        altitude: {
            type: Number,
            nullable: false
        }
    }
});

export default mongoose.model('Location', location);