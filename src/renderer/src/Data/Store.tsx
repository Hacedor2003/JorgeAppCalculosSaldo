/* eslint-disable prettier/prettier */
import { Context_Interface } from '@renderer/Interface'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Cliente_Interface, Componente_Interface, Producto_Interface, Venta_Interface } from 'src/shared/types'

// Contexto para la aplicación
const AppContext = createContext<Context_Interface>({
  data: {
    saldo:0
  }
})

// Componente proveedor del contexto
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <AppContext.Provider
      value={{
        data: {
          saldo: 0
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
