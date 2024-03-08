import ParamsRepository from "../repository/parameter_repository.js";
import ParamsService from "../service/parameter_service.js";
class ParameterController {

    async create(req, res){

        const body = req.body;
        const paramsService = new ParamsService();

        try {
            res = await paramsService.create({ body });
        } catch (e) {
            console.log(`error on calling service: ${e}`);
        }
        return res;
    }

    async delete() {

    }
}

module.exports = ParameterController;