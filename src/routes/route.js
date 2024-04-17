import express from "express";

const route = express.Router();

route.use((req, res, next) => {
    console.log('time: ', Date.now());
    next();
});

export default route;
