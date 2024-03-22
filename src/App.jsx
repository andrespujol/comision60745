import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Button from './components/button/Button'
import Componente from './components/button/Componente'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <NavBar /> 
      <ItemListContainer title='Tienda '/>
    </ChakraProvider>

  )
}

export default App
