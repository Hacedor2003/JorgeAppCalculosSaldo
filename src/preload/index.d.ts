import {
  Operaciones // Asegúrate de importar el modelo Operaciones
} from 'src/main/db/Models'
import {
  Operacion_Interface // Asegúrate de importar el tipo Operacion_Interface
} from '../shared/types'

declare global {
  interface Window {
    context: {
      getAllOperaciones: () => Promise<Operacion_Interface[]>
      getOperacion_By_Id: (id: number) => Promise<Operacion_Interface>
      editOperacion_By_Id: (
        id: number,
        updated: Operacion_Interface
      ) => Promise<Operacion_Interface>
      deleteOperacion_By_Id: (id: number) => Promise<void>
      createOperacion: (data: Operacion_Interface) => Promise<Operacion_Interface>
      crearSaldo: (cantidad: number) => Promise<Saldo_Interface>
      getSaldo: () => Promise<Saldo_Interface | undefined>
      updateSaldo: (nuevaCantidad: number) => Promise<Saldo_Interface | undefined>
      deleteSaldo: () => Promise<void>
    }
  }
}
