import React from "react";

const Boton = () => {
  const handleClick = () => {
    alert("Hola mundo");
  };
  return <button onClick={handleClick}>Clickeá acá</button>;
};

export default Boton;
