/* eslint-disable prettier/prettier */
import { Operacion_Interface } from 'src/shared/types'

const useEditOperacion = async (id:number,operacion:Operacion_Interface) => {
  try {
    const response = await window.context.editOperacion_By_Id(id, operacion)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useEditOperacion
