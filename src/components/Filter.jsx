import { Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import axios from 'axios'



const item=[   "price",
         "size",
      "type1",
      "type2",
      "type3","prod_name"]

function Filter() {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const btnRef = React.useRef();
    const [sort,setSort]= useState("")
    const [data,setData]= useState([])

    useEffect(()=>{
        axios.get(`http://localhost:1111/products?_sort=${sort}&_order=asc`)
        .then(res=>setData(res.data))
    },[sort])


  return (
    <Box>
      <Box pos="fixed" top="52px" right="10px" zIndex="3">
        <Button
          ref={btnRef}
          border="1px"
          borderRadius="0px"
          bgColor="white"
          borderColor="black"
          color="black"
          onClick={onOpen}
        >
          <Text fontSize="xs">FILTERS</Text>
        </Button>
        <Drawer
          size="sm"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter</DrawerHeader>

            <DrawerBody p="10px">
              <Box>
                <Text fontSize="sm">Sort By :</Text>

                <Select
                  placeholder="Select option"
                  onChange={(e) => setSort(e.target.value)}
                  value={sort}
                >
                  {item.map((el) => {
                    return (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    );
                  })}
                </Select>
              </Box>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Filter
