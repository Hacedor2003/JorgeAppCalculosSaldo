/* eslint-disable prettier/prettier */
import { Context_Interface } from '@renderer/Interface'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Cliente_Interface, Componente_Interface, Operacion_Interface, Producto_Interface, Venta_Interface } from 'src/shared/types'

// Contexto para la aplicación
const AppContext = createContext<Context_Interface>({
  data: {
    saldo: {data:0,state:()=>{}},
    operaciones: [],
    anadir_operacion: () => {}
  }
})

// Componente proveedor del contexto
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [saldo, setSaldo] = useState(1500)
  const [operaciones, setOperaciones] = useState<Operacion_Interface[]>([])
  
  return (
    <AppContext.Provider
      value={{
        data: {
          saldo: {data:saldo,state:setSaldo},
          operaciones: operaciones,
          anadir_operacion: (operacion: Operacion_Interface) =>
            setOperaciones((prev) => [...prev, operacion])
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
