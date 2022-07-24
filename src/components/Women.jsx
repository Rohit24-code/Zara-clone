import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import Filter from "./Filter";

import {  Button, Text, useDisclosure } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
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
// import axios from "axios";

const item = ["price", "size", "type1", "type2", "type3", "prod_name"];

function Women() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:1111/Women").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

           const { isOpen, onOpen, onClose } = useDisclosure();
           const btnRef = React.useRef();
           const [sort, setSort] = useState("");
           //   const [sortdata, setSortdata] = useState([]);

           const setSortdata=(sort)=>{
                 axios
                   .get(`http://localhost:1111/Women?_sort=${sort}&_order=asc`)
                   .then((res) => {
                     setData(res.data);
                     setLoading(false);
                   });
        
           }
        


              // const [filter, setFilter] = useState("");
              // useEffect(() => {
                const setFilter=(filter)=>{
                    axios
                      .get(`http://localhost:1111/Women?size=${filter}`)
                      .then((res) => {
                        setData(res.data);
                        setLoading(false);
                      });
                }
              
              // }, [filter]);

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Flex wrap="wrap">
          {data.map((el) => {
            return <Singledata key={el._id} el={el} {...el} />;
          })}
        </Flex>
      )}
      <Footer />
          <Filter/>
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
                    cursor="pointer"
                    placeholder="Select option"
                    onChange={(e) =>{ setSort(e.target.value)
                    setSortdata(sort)
                    }}
                    value={sort}
                  >
                    {item.map((el) => {
                      return (
                        <option cursor="pointer" key={el} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </Select>
                </Box>

                <Box mt="50px" ml="90px">
                  <Text fontSize="md" ml="55px">
                    FITER BASED ON SIZE
                  </Text>
                  <Button
                    bgColor="white"
                    color="black"
                    m="5px"
                    onClick={() => setFilter("S")}
                  >
                    small
                  </Button>
                  <Button
                    bgColor="white"
                    color="black"
                    m="5px"
                    onClick={() => setFilter("M")}
                  >
                    medium
                  </Button>
                  <Button
                    bgColor="white"
                    color="black"
                    m="5px"
                    onClick={() => setFilter("L")}
                  >
                    large
                  </Button>
                </Box>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
export default Women;
