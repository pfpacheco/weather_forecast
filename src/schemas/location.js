import mongoose, {Schema} from "mongoose";

const location = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
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