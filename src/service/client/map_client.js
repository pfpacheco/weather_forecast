import Index from "@googlemaps/google-maps-services-js";

class MapClient {

    constructor() {
        this.googleMaps = Index;
    }

    async generateMpLocation(latitude, longitude) {
        const client = new this.googleMaps.Client({});

        try {
            await client.elevation({
                params: {
                    locations: [{
                        lat: latitude,
                        lng: longitude
                    }],
                    key: process.env.GOOGLE_API_KEY
                }, timeout: 1000
            });
        } catch (err) {
            console.log(`error instantiating map ${err}`);
        }
    }
}

module.exports = MapClient;