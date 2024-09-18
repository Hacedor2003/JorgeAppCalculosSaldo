/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Operacion_Interface } from 'src/shared/types'
import { Context_Interface } from '@renderer/Interface'
import Saldo_Modal from '@renderer/components/Saldo_Modal'

const AppContext = createContext<Context_Interface>({
  data: {
    saldo: { data: 0, state: () => {} },
    operaciones: { data: [], state: () => {} }
  }
})

const AppProvider = ({ children }:{children:React.ReactNode}) => {
  const [saldo, setSaldo] = useState(1500)
  const [operaciones, setOperaciones] = useState<Operacion_Interface[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchOperaciones = useCallback(async () => {
    const response = await window.context.getAllOperaciones()
    setOperaciones(response)
  }, [])

  const fetchSaldo = useCallback(async () => {
    const response = await window.context.getSaldo()
    if (response === undefined) {
      setIsModalOpen(true)
    } else {
      setSaldo(response.cantidad)
    }
  }, [])

  const handleSaldoSubmit = async (nuevoSaldo:number) => {
    await window.context.crearSaldo( nuevoSaldo ) 
    setSaldo(nuevoSaldo)
  }

  useEffect(() => {
    fetchOperaciones()
    fetchSaldo()
  }, [fetchOperaciones, fetchSaldo])

  return (
    <AppContext.Provider
      value={{
        data: {
          saldo: { data: saldo, state: setSaldo },
          operaciones: { data: operaciones, state: setOperaciones }
        }
      }}
    >
      {children}
      {isModalOpen && (
        <Saldo_Modal onClose={() => setIsModalOpen(false)} onSubmit={handleSaldoSubmit} />
      )}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
