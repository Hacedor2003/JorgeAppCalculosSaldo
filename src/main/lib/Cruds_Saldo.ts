/* eslint-disable prettier/prettier */

import Saldo from "../db/Models/Saldo_Class_DB";

// Crear un nuevo saldo
const crearSaldo = async (cantidad: number) => {
  const nuevoSaldo = await Saldo.create({ cantidad });
  return nuevoSaldo.dataValues;
};

// Obtener el saldo actual
const getSaldo = async () => {
  const saldo = await Saldo.findOne();
  return saldo?.dataValues;
};

// Actualizar el saldo
const updateSaldo = async (nuevaCantidad: number) => {
  const saldo = await Saldo.findOne();
  if (saldo) {
    saldo.cantidad = nuevaCantidad
    await saldo?.save()
  }
  return saldo?.dataValues;
};

// Eliminar el saldo (opcional, ten en cuenta que solo debe haber uno)
const deleteSaldo = async () => {
  const saldo = await Saldo.findOne();
  if (saldo) {
    await saldo.destroy();
    console.log('Saldo eliminado.');
  } else {
    console.log('No hay saldo para eliminar.');
  }
};

export { crearSaldo , getSaldo ,updateSaldo , deleteSaldo  }