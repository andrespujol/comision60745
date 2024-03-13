const div = document.getElementById("root");

const crearBoton = () => {
  const btn = document.createElement("button");

  btn.innerHTML = "Mi botón";
  btn.className = "btn";
  btn.id = "btn";
  btn.disabled = false;

  div.appendChild(btn);
};
crearBoton();
