import { Operacion_Interface } from 'src/shared/types'

/* eslint-disable prettier/prettier */
const useEditOperacion = async (id:number,operacion:Operacion_Interface) => {
  try {
    const response = await window.context.editOperacion_By_Id(id, operacion)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useEditOperacion
