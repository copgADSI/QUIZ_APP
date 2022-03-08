import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'

const Home = () => {
  return (
    <div>
        <div>Vienvenido al Juego de Pregustas</div>
        <h1>Seleccione Categoría:</h1>
        <CustomButton 
            type="button" 
            text="Cine y Televisión"
        />
        <CustomButton 
            type="button" 
            text="Ciencia"
        />
        <CustomButton 
            type="button" 
            text="Cultura General"
        />
    </div>
  )
}

export default Home