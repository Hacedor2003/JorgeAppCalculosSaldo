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
    const [updated] = await Saldo.update(
      { cantidad: nuevaCantidad, ID_Saldo: saldo.dataValues.ID_Saldo },
      {
        where: { ID_Saldo: saldo.dataValues.ID_Saldo }
      }
    )
    if (!updated) {
      throw new Error('Saldo no encontrado o no se realizaron cambios');
    }
    const updatedOperacion = await getSaldo();
    return updatedOperacion;
  } else {
    throw new Error('Saldo no encontrado')
  }
  
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