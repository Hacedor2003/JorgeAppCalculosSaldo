import { Saldo_Interface } from 'src/shared/types'

/* eslint-disable prettier/prettier */
const useUpdateSaldo = async (newSaldo:number) => {
  try {
    const response = await window.context.updateSaldo(newSaldo)
    return response
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export default useUpdateSaldo
