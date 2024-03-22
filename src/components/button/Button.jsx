import React from 'react'
import { useState } from 'react'

const Button = ({color, label, onClickCallback, children}) => {
     const [ background, setBackground ] = useState(color)

     const handleClick = () => {
        onClickCallback && onClickCallback()
        setBackground('red')
     }


  return (
    <div>
        <button 
            style={{background}}
            onClick={handleClick}
        >{children}</button>
    </div>
  )
}

export default Button
