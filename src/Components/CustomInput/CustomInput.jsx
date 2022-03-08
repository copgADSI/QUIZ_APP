import React from 'react'

const CustomInput = ({type = "text", placeholder = {}, value=10}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default CustomInput