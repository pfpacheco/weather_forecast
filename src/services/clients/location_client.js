import * as http from "http";
import LocationClientRepository from "../../repositories/location_client_repository.js";

class LocationClient {
    async getLocationFromService(lat, lon, alt) {
        const locationClientRepository = new LocationClientRepository();
        try {
            const serverURL = "https://api.met.no";
            // *** Usage *** /compact?lat=23.21&lon=53.78&altitude=1300
            const path = "/weatherapi/locationforecast/2.0/compact" + "?lat=" + lat + "&lon=" + lon + "&altitude=" + alt;
            const options = {
                server: serverURL,
                path: path,
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const res = http.request(options, async (res) => {
                if (res.statusCode === 200) {
                    const geometry = res["geometry"];
                    const data = {
                        coordinates: {
                            latitude: geometry["coordinates"].latitude,
                            longitude: geometry["coordinates"].longitude,
                            altitude: geometry["coordinates"].altitude
                        }
                    }
                    return await locationClientRepository.save(data);
                } else {
                    return { code: res.statusCode, statusMessage: res.statusMessage }
                }
            });
        } catch (err) {
            return {code: 500, message: err.message};
        }
    }
}
export default LocationClient;