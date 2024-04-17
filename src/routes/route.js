import express from "express";
import LocationController from "../controllers/location_controller.js"

const route = express.Router();

route.use((req, res, next) => {
    console.log('time: ', Date.now());
    next();
});

route.get('/weather_forecast/rest/api/client/location/get', async(req, res) => {
    return LocationController.getLocationCoords(req, res);
});

export default route;
