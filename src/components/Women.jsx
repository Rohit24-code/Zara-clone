import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import Footer from "./Footer";
import Filter from "./Filter";

// import { useDisclosure } from "@chakra-ui/react";



function Women() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://zaraclone-json-data.herokuapp.com/Women").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

          //  const { isOpen, onOpen, onClose } = useDisclosure();
          //  const btnRef = React.useRef();
          //  const [sort, setSort] = useState("");

          // //  const setSortdata=(sort)=>{
          //        axios
          //          .get(`http://localhost:1111/Women?_sort=${sort}&_order=asc`)
          //          .then((res) => {
          //            setData(res.data);
          //            setLoading(false);
          //          });
        
          //  }
        


              // const [filter, setFilter] = useState("");
              // useEffect(() => {
                // const setFilter=(filter)=>{
                //     axios
                //       .get(`http://localhost:1111/Women?size=${filter}`)
                //       .then((res) => {
                //         setData(res.data);
                //         setLoading(false);
                //       });
                // }
              
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
    </Box>
  );
}
export default Women;
