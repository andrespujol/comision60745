import './App.css'
import Boton from './components/boton/Boton'
import BotonDinamico from './components/microdesafio/botonDinamico/BotonDinamico'

function App() {
  const handleClick = () => {
    alert('Hola desde el botón dinámico')
  }
  return (
    <div>
      {/* <Boton /> */}
      <BotonDinamico 
        texto='Agregar al carrito'
        clase='btn'
        id='btn'
        disabled={false}
        handleClick={handleClick}
      />
            <BotonDinamico 
        texto='otro botón'
        clase='boton'
        id='btn'
        disabled={false}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
