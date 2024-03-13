import React from 'react'
import './BotonDinamico.css'
const BotonDinamico = ({texto, clase, id, disabled, handleClick}) => {

  return (
    <button 
        onClick={handleClick} 
        id={id} 
        className={clase} 
        disabled={disabled}>
            {texto}
    </button>
  )
}

export default BotonDinamico
