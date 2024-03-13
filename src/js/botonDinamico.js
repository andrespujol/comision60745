const div = document.getElementById("root");

const botonDinamico = (texto, clase, id, disabled) => {
  const boton = document.createElement("button");

  boton.innerHTML = texto;
  boton.className = clase;
  boton.id = id;
  boton.disabled = disabled;
  boton.addEventListener("click", handleClick);
  div.appendChild(boton);
};
const handleClick = () => {
  alert("clickeaste");
};

botonDinamico("Soy un botón dinámico", "boton", "boton", true);
botonDinamico("otro botón", "btn", "btn", false);
