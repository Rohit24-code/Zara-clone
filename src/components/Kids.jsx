import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Singledata from "./Singledata";
import Loading from "./Loading";

function Kids() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:1111/Kids").then((res) => {
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

export default Kids;
