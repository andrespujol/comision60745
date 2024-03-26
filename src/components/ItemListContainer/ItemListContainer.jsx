import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({title}) => {
  return (
    <Box>
      <Heading textAlign={'center'} mt={4}>{title}</Heading>
    </Box>
  )
};

export default ItemListContainer;
