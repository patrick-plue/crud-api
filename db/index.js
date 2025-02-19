import { Sequelize } from 'sequelize';

const connectionString = process.env.DB_CONNECTIONSTRING;
const sequelize = new Sequelize(connectionString);
