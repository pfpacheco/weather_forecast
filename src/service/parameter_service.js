const ParamsRepository = require("../repository/parameter_repository.js");

class ParameterService {

    async create(parameters) {
        let response = {};
        try {
            const parameterRepository = new ParamsRepository();
            await parameterRepository.create(parameters);
            response.status(200).json({
                data: parameters,
                status: "success"
            });
        } catch (err) {
            response.status(500).json({
                data: err,
                status: "error"
            });
            console.log(`error in service level: ${parameters}, error: ${err}`);
        }
        return response;
    }
}

module.exports = ParameterService;