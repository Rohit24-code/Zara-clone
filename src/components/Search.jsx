import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from './Footer';
import Singledata from './Singledata';
import Loading from './Loading';
import {  useDisclosure } from "@chakra-ui/react";
import  { useEffect} from "react";
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
import axios from "axios";

const item = ["price", "size", "type1", "type2", "type3", "prod_name"];
function Search() {
    const [text,setText] =useState("")
    const[data,setData] = useState([])
    const[loading,setLoading] =useState(true)

    const getsearch =(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:1111/products?q=${text}`)
        .then((res)=>{setData(res.data)
        setLoading(false)})
        setText("")
    }

          const { isOpen, onOpen, onClose } = useDisclosure();
          const btnRef = React.useRef();
          const [sort, setSort] = useState("");
        //   const [sortdata, setSortdata] = useState([]);

          useEffect(() => {
            axios
              .get(`http://localhost:1111/products?_sort=${sort}&_order=asc`)
              .then((res) => {
                setData(res.data)
                setLoading(false)
            });
          }, [sort]);

        //   console.log(data)
  return (
    <Box>
      <Box>
        <Box ml="200px">
          <Text
            as="h1"
            textAlign="center"
            fontSize="6xl"
            fontWeight="500"
            mt="100px"
          >
            {" "}
            SEARCH
          </Text>

          <form onSubmit={getsearch}>
            <Input
              onChange={(e) => setText(e.target.value)}
              border="none"
              borderRadius="0"
              borderBottom="1px"
              borderColor="black"
              type="text"
              value={text}
              placeholder="search items...."
            />
            <Button bgColor="red" display="none" color="black">
              submit
            </Button>
          </form>
        </Box>
        {loading ? (
          <Box width="400px" height="400px" bgColor="white">
            <Loading />
          </Box>
        ) : (
          <Flex wrap="wrap">
            {data.map((el) => {
              return <Singledata key={el._id} el={el} {...el} />;
            })}
          </Flex>
        )}
        <Footer />

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
      </Box>
    </Box>
  );
  
}

export default Search
