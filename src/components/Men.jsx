import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";
import { Appcontext } from "../Context/AppContext";

function Men() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {state} = useContext(Appcontext)

  useEffect(() => {
    axios.get("http://localhost:1111/Men").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

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
    </Box>
  );
}

export default Men;
