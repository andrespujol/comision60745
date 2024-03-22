import { Heading } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({title}) => {
  return <Heading textAlign={'center'} mt={4}>{title}</Heading>;
};

export default ItemListContainer;
