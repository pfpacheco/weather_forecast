import connection from "mongoose";

class Database {
    createConnection(mongodb_uri){

        const conn = connection.createConnection();

        try {
           conn.openUri(mongodb_uri).then( function () {
               if (conn.readyState === 1) {
                   return conn;
               }
           }).catch( err => {
                   console.log(`connection error: ${err}`);
               }
           );
       } catch (err) {
           console.log(`connection error: ${err}`);
       }
       return conn;
    }

    closeConnection(connection) {
        try {
            connection.connection.close();
        } catch (err) {
            console.log(`error on closing connection: ${err}`);
        } finally {
            connection = null;
        }
    }
}

module.exports = Database;

