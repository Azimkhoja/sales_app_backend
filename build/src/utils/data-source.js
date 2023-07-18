"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const config_1 = require("config");
const postgresConfig = config_1.default.get('postgresConfig');
const AppDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: 'postgres', synchronize: false, logging: ["query", "error"], entities: ['src/entities/**/*.entity{.ts,.js}'], migrations: ['src/migrations/**/*{.ts,.js}'], subscribers: ['src/subscribers/**/*{.ts,.js}'] }));
if (!AppDataSource.isInitialized) {
    AppDataSource.initialize()
        .then(() => {
        console.log("db init success");
    })
        .catch((error) => console.log(error));
}
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map