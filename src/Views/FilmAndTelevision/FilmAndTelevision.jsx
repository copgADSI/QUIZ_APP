import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomSelect from '../../Components/CustomSelect/CustomSelect'

const FilmAndTelevision = () => {
  return (
    <div>
        <div>Configure las reglas del juego!</div>
        <CustomInput 
            type="number"
            placeholder="Número de preguntas"
        />
        <CustomSelect option="Seleccione dificultad" />
        <br />
        <CustomButton type="button" text="¡Iniciar Juego!"/>
    </div>
  )
}

export default FilmAndTelevision