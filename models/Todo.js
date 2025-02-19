import sequelize from '../db/connection.js';
import { DataTypes } from 'sequelize';

const Todo = sequelize.define('User', {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Todo.sync();
