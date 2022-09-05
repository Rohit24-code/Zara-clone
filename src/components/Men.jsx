import axios from "axios";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import { Appcontext } from "../Context/AppContext";
import Footer from "./Footer";
import Filter from "./Filter";

import { useDisclosure } from "@chakra-ui/react";
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


const item = ["price", "size", "type1", "type2", "type3", "prod_name"];

function Men() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
     const { isOpen, onOpen, onClose } = useDisclosure();
     const btnRef = React.useRef();
     const [sort, setSort] = useState("");
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
      .get(`https://zaraclone-json-data.herokuapp.com/Men?size=${filter}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };
              


  const {state} = useContext(Appcontext)

  useEffect(() => {
    axios.get("https://zaraclone-json-data.herokuapp.com/Men").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

    //  const [filter, setFilter] = useState("");
    //  useEffect(() => {
    //    axios.get(`http://localhost:1111/Men?size=${filter}`).then((res) => {
    //      setData(res.data);
    //      setLoading(false);
    //    });
    //  }, [filter]);

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
    </Box>
  );
}

export default Men;
