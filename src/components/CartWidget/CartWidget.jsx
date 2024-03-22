import { Box } from '@chakra-ui/react';
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <Box mr={4}>
      <MdOutlineShoppingCart className='cartIcon' />

    </Box>
  )
}

export default CartWidget
