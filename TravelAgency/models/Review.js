import { Sequelize } from "sequelize";
import db from '../config/db.js';

export const Review = db.define('reviews', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
});