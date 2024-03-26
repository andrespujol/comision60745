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
    Flex,
    Box
 } from '@chakra-ui/react'
 import { FaAngleDown } from "react-icons/fa";
 import logo from '../../assets/react.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <Flex justify={'space-between'} align={'center'} className='navbar'>

      <Heading ml={4}><img src={logo} /></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
            Actions
        </MenuButton>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
        </Menu>

      <CartWidget />
    </Flex>
  )
}

export default NavBar
