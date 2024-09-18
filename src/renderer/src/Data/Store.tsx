/* eslint-disable prettier/prettier */
import { Context_Interface } from '@renderer/Interface'
import { createContext, useCallback, useEffect, useState } from 'react'
import { getAllOperaciones } from 'src/main/lib/CRUDS'
import { Operacion_Interface } from 'src/shared/types'

// Contexto para la aplicación
const AppContext = createContext<Context_Interface>({
  data: {
    saldo: { data: 0, state: () => {} },
    operaciones: [],
  }
})

// Componente proveedor del contexto
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [saldo, setSaldo] = useState(1500)
  const [operaciones, setOperaciones] = useState<Operacion_Interface[]>([])

  const fetchOperaciones = useCallback(async () => {
    const response = await getAllOperaciones()
    setOperaciones(response)
  }, [])

  useEffect(() => {
    fetchOperaciones()
  }, [fetchOperaciones])

  return (
    <AppContext.Provider
      value={{
        data: {
          saldo: { data: saldo, state: setSaldo },
          operaciones,
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
