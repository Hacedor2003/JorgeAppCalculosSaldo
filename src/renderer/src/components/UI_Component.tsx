/* eslint-disable prettier/prettier */
import React from 'react'

export const Button_UI = ({
  type,
  texto,
  funcion,
  name,
  value
}: {
  funcion?: () => void
  texto: string
  type: 'submit' | 'reset' | 'button' | undefined
    name?: string
    value?:string
}) => (
  <button
    className="border border-black w-fit hover:bg-principal hover:text-white transition-all duration-300 p-2 rounded-xl hover:rounded-sm bg-white text-black"
    type={type}
    onClick={funcion}
    name={name}
    value={value}
  >
    {texto}
  </button>
)

/**
 * Componente con label y input-type
 * @param texto: Texto del label , id placeholder
 * @param type: del input
 * @param value: del input
 * @param funcion: que se va a usar en el onChange
 * @param name: del input
 * @returns
 */
export const Input_UI: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  type = 'text',
  label,
  className,
  required
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-xl font-medium text-gray-700">
      {label}
    </label>
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className={`border border-black p-2 rounded w-full ml-2 mt-1 ${className}`}
      required={required}
    />
  </div>
)

/**
 * Un select con label
 * @param id html for
 * @param name name del input
 * @param label texto del label
 * @param options un array de options
 * @param value el value del select
 * @param onChange (e)=> onChange(e.target.value)
 * @param required si es required o no
 * @param className className adicionales
 * @returns
 */
export const SelectComponent = ({
  id,
  name,
  label,
  options,
  value,
  onChange,
  required = false,
  className
}: {
  id: string
  name: string
  label: string
  options: any
  value: number | undefined
  onChange: React.Dispatch<React.SetStateAction<any>>
  required: boolean
  className: string
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-2xl font-thin font-serif" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={className + ' w-fit border border-black p-2 rounded-md cursor-pointer'}
      >
        <option value="">Selecciona una opción</option>
        {options}
      </select>
    </div>
  )
}

interface InputProps {
  name: string
  placeholder: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: React.HTMLInputTypeAttribute
  label: string
  className?: string
  required?: boolean
}
