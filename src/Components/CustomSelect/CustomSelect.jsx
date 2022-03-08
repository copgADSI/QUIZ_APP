import React from 'react'

const CustomSelect = ({option}) => {
  return (
    <select>
        <option value={option}> {option} </option>
        <option value="Fácil">Fácil</option>
        <option value="Normal">Normal</option>
        <option value="Moderado">Moderado</option>
        <option value="Difícil">Difícil</option>
        <option value="Experto">Experto</option>
    </select>
  )
}

export default CustomSelect