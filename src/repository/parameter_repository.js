import Database  from "../database/database.js"
import ParameterSchema from "../models/parameter.js"

class ParameterRepository {

    constructor() {
        this.mongodb_uri = process.env.MONGODB_URI;
    }

    async create(parameter) {
        const database = new Database();
        const connection = database.createConnection(this.mongodb_uri);

        try {
            const parameterSchema = connection.model(ParameterSchema.modelName, parameter);
            await parameterSchema.create();
        } catch (err) {
            console.log(`error persisting parameters: ${err}`);
        } finally {
            try {
                database.closeConnection(connection);
            } catch (dberr) {
                console.log(`error closing the database: ${dberr}`);
            }
        }
    }

    async delete(parameter){

        const database = new Database();
        const connection = database.createConnection(this.mongodb_uri);

        try {
            const parameterSchema = connection.model(ParameterSchema.modelName, parameter);
            parameterSchema.deleteOne({_id: parameter.id});
        } catch (err) {
            console.log(`error deleting parameters: ${err}`);
        } finally {
            try {
                database.closeConnection(connection);
            } catch (dberr) {
                console.log(`error closing the database: ${dberr}`);
            }
        }
    }
}

module.exports = ParameterRepository;

