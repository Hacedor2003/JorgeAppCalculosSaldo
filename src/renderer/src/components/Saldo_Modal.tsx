/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Button_UI } from './UI_Component'

const Saldo_Modal = ({ onClose, onSubmit }) => {
  const [nuevoSaldo, setNuevoSaldo] = useState(0)

  const handleSubmit = () => {
    onSubmit(nuevoSaldo)
    onClose()
  }

  return (
    <div className="absolute z-50 bg-zinc-500 w-1/2 h-1/2 left-[25%] top-[25%] flex flex-col items-center justify-center rounded-xl">
      <h2>Ingresar Saldo</h2>
      <input
         className='rounded-xl'
        type="number"
        value={nuevoSaldo}
        onChange={(e) => setNuevoSaldo(Number(e.target.value))}
        placeholder="Ingrese su saldo"
      />
      <div className='w-1/2 self-center flex flex-row items-center justify-center gap-2 my-2'>
      <Button_UI type='button' texto='Aceptar' funcion={handleSubmit}/>
        <Button_UI type='button' texto='Cancelar' funcion={onClose} />
        </div>
    </div>
  )
}

export default Saldo_Modal
