import ParamsRepository from "../repository/parameter.js";
import ParamsService from "../service/parameters.js";
module.exports = class ParameterController {

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