"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const userModel_1 = require("../data/models/userModel");
const sequelize_typescript_1 = require("sequelize-typescript");
const connect = () => {
    const hostname = "localhost";
    const port = 5432;
    const userName = "postgres";
    const password = "M@rte2025";
    const database = "PicaCodigo";
    const schema = "public";
    const dialect = "postgres";
    const sequelize = new sequelize_typescript_1.Sequelize(database, userName, password, {
        host: hostname,
        port: port,
        dialect,
        repositoryMode: true,
        schema: schema,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000,
        },
    });
    sequelize.addModels([userModel_1.user]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
    return db;
};
exports.connect = connect;
