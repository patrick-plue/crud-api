import { Sequelize } from 'sequelize';

const connectionString = process.env.DB_CONNECTIONSTRING;
const sequelize = new Sequelize(connectionString);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
} catch (error) {
    console.error('Unable to connect to the database', error);
}

export default sequelize;
