import sequelize from '../db';
import { DataTypes } from 'sequelize';

const Todo = sequelize.define({
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
