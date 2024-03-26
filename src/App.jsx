import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Button from './components/button/Button'
import Componente from './components/button/Componente'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './components/itemCount/ItemCount'

function App() {

  return (
    <ChakraProvider>
      <NavBar /> 
      <ItemListContainer title='Tienda '/>
      <ItemCount />
    </ChakraProvider>
  )
}

export default App
