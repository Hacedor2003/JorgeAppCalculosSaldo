/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

const Saldo_Modal = ({ onClose, onSubmit }) => {
  const [nuevoSaldo, setNuevoSaldo] = useState(0)

  const handleSubmit = () => {
    onSubmit(nuevoSaldo)
    onClose()
  }

  return (
    <div className="modal">
      <h2>Ingresar Saldo</h2>
      <input
        type="number"
        value={nuevoSaldo}
        onChange={(e) => setNuevoSaldo(Number(e.target.value))}
        placeholder="Ingrese su saldo"
      />
      <button onClick={handleSubmit}>Aceptar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  )
}

export default Saldo_Modal
