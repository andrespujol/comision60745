import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { 
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Flex
 } from '@chakra-ui/react'
 import { FaAngleDown } from "react-icons/fa";
 import logo from '../../assets/react.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <Flex className='navbar'>
      <Heading ml={4}><img src={logo}/></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
            Productos
        </MenuButton>
        <MenuList >
            <MenuItem>Remeras</MenuItem>
            <MenuItem>Pantalones</MenuItem>
            <MenuItem>Buzos</MenuItem>
            <MenuItem>Pijamas</MenuItem>
        </MenuList>
        </Menu>

      <CartWidget />
    </Flex>
  )
}

export default NavBar
