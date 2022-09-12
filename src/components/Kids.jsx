import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import Filter from "./Filter";
import { Input, Text } from "@chakra-ui/react";
// import Footer from "./Footer";
// import Singledata from "./Singledata";
// import Loading from "./Loading";
import { useDisclosure } from "@chakra-ui/react";
// import { useEffect } from "react";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from "@chakra-ui/react";
// import { Select } from "@chakra-ui/react";
import axios from "axios";

// const item = ["price", "size", "type1", "type2", "type3", "prod_name"];

function Kids() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://zaraclone-json-data.herokuapp.com/Kids").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);


           const { isOpen, onOpen, onClose } = useDisclosure();
          const btnRef = React.useRef();
          const [sort, setSort] = useState("");
         
        //   const [sortdata, setSortdata] = useState([]);

          const setSortdata = (sort) => {
            axios
              .get(
                `https://zaraclone-json-data.herokuapp.com/Men?_sort=${sort}&_order=asc`
              )
              .then((res) => {
                setData(res.data);
                setLoading(false);
              });
          };

          // const [filter, setFilter] = useState("");
          // useEffect(() => {
          const setFilter = (filter) => {
            axios
              .get(
                `https://zaraclone-json-data.herokuapp.com/Men?size=${filter}`
              )
              .then((res) => {
                setData(res.data);
                setLoading(false);
              });
          };
     



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
          <Filter/>
      <Footer />
    </Box>
  );
}

export default Kids;
