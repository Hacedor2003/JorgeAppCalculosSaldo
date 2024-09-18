/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize';

// Configuración de Sequelize con SQLite
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});
