/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
});
