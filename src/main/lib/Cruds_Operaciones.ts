/* eslint-disable prettier/prettier */

import { Operacion_Interface } from '../../shared/types';
import { Operacion_Class_DB } from '../db/Models/Operacion_Class_DB';

// Crear una nueva operación
export const createOperacion = async (data: Operacion_Interface) => {
  try {
    const response = await Operacion_Class_DB.create(data);
    return response.dataValues;
  } catch (error) {
    console.error('Error al crear la operación:', error);
    throw error;
  }
};

// Leer todas las operaciones
export const getAllOperaciones = async () => {
  try {
    const response = await Operacion_Class_DB.findAll();
    return response.map(op => op.dataValues);
  } catch (error) {
    console.error('Error al obtener las operaciones:', error);
    throw error;
  }
};

// Leer una operación por ID
export const getOperacionById = async (id: number) => {
  try {
    const response = await Operacion_Class_DB.findByPk(id);
    if (!response) {
      throw new Error('Operación no encontrada');
    }
    return response.dataValues;
  } catch (error) {
    console.error('Error al obtener la operación:', error);
    throw error;
  }
};

// Actualizar una operación por ID
export const updateOperacion = async (id: number, data: Partial<Operacion_Interface>) => {
  try {
    const [updated] = await Operacion_Class_DB.update(data, {
      where: { ID_Operacion: id },
    });
    if (!updated) {
      throw new Error('Operación no encontrada o no se realizaron cambios');
    }
    const updatedOperacion = await getOperacionById(id);
    return updatedOperacion;
  } catch (error) {
    console.error('Error al actualizar la operación:', error);
    throw error;
  }
};

// Eliminar una operación por ID
export const deleteOperacion = async (id: number) => {
  try {
    const deleted = await Operacion_Class_DB.destroy({
      where: { ID_Operacion: id },
    });
    if (!deleted) {
      throw new Error('Operación no encontrada');
    }
    return { message: 'Operación eliminada exitosamente' };
  } catch (error) {
    console.error('Error al eliminar la operación:', error);
    throw error;
  }
};
