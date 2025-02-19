import sequelize from '../db/connection.js';
import { DataTypes } from 'sequelize';

const Todo = sequelize.define('User', {
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
        },
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 4,
        },
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Todo.sync();
