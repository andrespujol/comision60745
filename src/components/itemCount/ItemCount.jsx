import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {
    const [ count, setCount ] = useState(1)
    
    const stock = 5 
// estado: count
// inicializar: con el valor 1 

const incrementar = () => {
    count < stock && setCount(count + 1)
}
const decrementar = () => {
    count > 1 && setCount(count - 1)
}

  return (
    <Flex>
      <Button onClick={decrementar}>-</Button>
      <Heading>{count}</Heading>
      <Button onClick={incrementar}>+</Button>
    </Flex>
  )
}

export default ItemCount
