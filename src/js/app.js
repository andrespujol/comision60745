const div = document.getElementById("root");

const crearBoton = () => {
  const btn = document.createElement("button");
  btn.innerHTML = "Clickeá acá";

  div.appendChild(btn);
};

crearBoton();
