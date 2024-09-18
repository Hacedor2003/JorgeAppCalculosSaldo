/* eslint-disable prettier/prettier */
import { Operacion_Interface } from 'src/shared/types'

const useCreateOperacion = async (operacion: Operacion_Interface) => {
  try {
    const response = await window.context.createOperacion(operacion)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useCreateOperacion
