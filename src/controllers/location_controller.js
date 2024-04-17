class LocationController {
    constructor() {
        this.message = null;
    }

    static getLocationCoords(req, res) {
        try {
            this.message = { message: "ok" };
            res.status(200);
        } catch (err) {
            this.message = { message: `${err}` };
            res.status(500);
        }
        res.end(JSON.stringify(this.message));
        return Promise.resolve(res);
    }
}
export default LocationController;
