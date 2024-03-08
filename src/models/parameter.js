import mongoose from "mongoose";

const { Schema } = mongoose;

const ParameterSchema = new Schema( {
    properties: {
        meta: {
            air_pressure_at_sea_level: {type: String},
            air_temperature: {type: String},
            air_temperature_max: {type: String},
            air_temperature_min: {type: String},
            cloud_area_fraction: {type: String},
            cloud_area_fraction_high: {type: String},
            cloud_area_fraction_low: {type: String},
            cloud_area_fraction_medium: {type: String},
            dew_point_temperature: {type: String},
            fog_area_fraction: {type: String},
            precipitation_amount: {type: String},
            relative_humidity: {type: String},
            ultraviolet_index_clear_sky: {type: String},
            wind_from_direction: {type: String},
            wind_speed: {type: String}
        },
        updated_at: {type: Date},
    },
});

module.exports = mongoose.model("ParameterSchema", ParameterSchema);