require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from 'config';


const postgresConfig = config.get<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}>('postgresConfig');

const AppDataSource = new DataSource({
    ...postgresConfig,
    type: 'postgres',
    synchronize: false,
    logging: ["query", "error"],
    entities: ['src/entities/**/*.entity{.ts,.js}'],
    migrations: [ 'src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscribers/**/*{.ts,.js}'],
});

if (!AppDataSource.isInitialized){
    AppDataSource.initialize()
        .then(()=>{
            console.log("db init success");
        })
        .catch((error)=> console.log(error));
}

export default AppDataSource