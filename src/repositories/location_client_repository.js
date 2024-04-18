import { Schema } from "mongoose";
import Location from "../schemas/location.js"
import uuidv4 from "uuid";


class LocationClientRepository {

    constructor() {
        this.model = Location;
    }

    async save(data) {
        try {
            const model = new this.model(data);
            await model.save();
            return await this.findByClientLocation(data);
        } catch (err) {
            throw new Error(err.message);
        }
    }
    async findByClientLocation(data){
        try {
            return this.model.findOne( data, null, null );
        } catch (err) {
            throw new Error(err.message);
        }
    }
}
export default LocationClientRepository;