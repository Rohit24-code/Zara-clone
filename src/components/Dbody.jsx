import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

let Men = [
  "NEW",
  "ZARA ATHLETICZ",
  "BASICSNEW",
  "TRENDNEW",
  "LINEN",
  "SUITS",
  "SHIRTS",
  "T-SHIRTS",
  "POLO SHIRTS",
  "SHORTS",
  "TROUSERS",
  "JEANSNEW",
  "JACKETS",
  "HOODIES | SWEATSHIRTS",
  "KNITWEAR",
  "OVERSHIRTS",
  "BLAZERS",
  "TRACKSUITS",
  "SHOES",
  "BAGS | BACKPACKS",
  "ACCESSORIES",
  "SWIMWEAR",
  "PERFUMES",
];

let Women = [
  "NEW",
  "BASICS",
  "BLAZERS",
  "JACKETS | OVERSHIRTS",
  "DRESSES | JUMPSUITS",
  "SHIRTS",
  "T-SHIRTS",
  "TOPS | CORSETS",
  "HOODIES | SWEATSHIRTS",
  "KNITWEAR",
  "OVERSHIRTS",
  "BLAZERS",
  "TRACKSUITS",
  "SHOES",
  "BAGS | BACKPACKS",
  "ACCESSORIES",
  "SWIMWEAR",
  "PERFUMES",
];

let Child = [
  "GIRL | 6 - 14 YEARS",
  "BOY | 6 - 14 YEARS",
  "BABY GIRL | 6 MONTHS - 5 YEARS",
  "BABY BOY | 6 MONTHS - 5 YEARS",
  "MINI | 0-12 MONTHS",
  "ACCESSORIES",
  "JOIN LIFE",
];
let men="men";
let women="women";
let child="child";

function Dbody() {
  const [nam, setName] = useState(Women);
  const [link,setLink] = useState("women");
console.log(link)
  return (
    <Box>
      <Flex gap={6}>
        <Box style={{ cursor: "pointer" }} onClick={() => {
          setName(Women)
            setLink(women)
          }}>
          Women
        </Box>
        <Box style={{ cursor: "pointer" }} onClick={() => {
          setName(Men)
          setLink(men)
          }}>
          Men
        </Box>

        <Box style={{ cursor: "pointer" }} onClick={() => {
          setName(Child)
          setLink(child)
          }}>
          Child
        </Box>
      </Flex>
      <Box mt={20}>
        {nam &&
          nam.map((el, ind) => {
            return (
              <Text key={ind} fontSize="xs" fontWeight={400}>
                <Link to={`/${link}`}>{el}</Link>
              </Text>
            );
          })}
      </Box>
      <Box ml={-6} mr={-6} mt={8}>
        <Text
          fontSize="xs"
          backgroundColor="yellow"
          p={2}
          pl={6}
          fontWeight={400}
        >
          SALE
        </Text>
      </Box>
      <Box mt={8} mb={8}>
        <Text fontSize="xs" fontWeight={400}>
          +INFO
        </Text>
      </Box>
    </Box>
  );
}

export default Dbody;
