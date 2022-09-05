import { AspectRatio, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "./Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


let Women={image1:"zara1.jpg",video:"zarawomen.mp4",image2:"https://static.zara.net/photos///2022/V/0/1/p/7969/046/251/2/w/599/7969046251_1_1_1.jpg?ts=1644423513750"}
let Men = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-28-02//w/1922/IMAGE-landscape-fill-ebca4191-db81-4df3-9f7e-4608fe6316f6-default_0.jpg?ts=1657819304984",
  video: "zaramen.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-28-03//w/1922/IMAGE-landscape-fill-dfef3e6a-2e27-4ea7-b049-238695831147-default_0.jpg?ts=1657819076668",
};
let Child = {
  image1:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-join-life/subhome-xmedia-28//w/1922/IMAGE-portrait-fill-3f362768-96de-456c-bb54-952465dec7dd-default_0.jpg?ts=1657732957677",
  video: "zarakids.mp4",
  image2:
    "https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-girl/subhome-xmedia-28-3//w/1922/IMAGE-portrait-ipad-fill-68617b25-535d-400d-8fb7-c84b8a5ef1f6-default_0.jpg?ts=1658223344119",
};
let arr = [Women,Men,Child]

const Home = () => {
  const [ind,setInd] = useState(0)
  return (
    <Box pos="relative">
      <Box>
        <img src={arr[ind].image1} alt="" width="cover" height="100%" />
        <Flex zIndex={2} pos="fixed" top={50} left={1} gap={1000} >
          <Box>
            <Button
              disabled={ind == 0}
              onClick={() => setInd(ind - 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronLeftIcon w={12} h={10} />
            </Button>
          </Box>
          <Box>
            <Button
              disabled={ind == 2}
              onClick={() => setInd(ind + 1)}
              colorScheme="transparent"
              size="lg"
              mt={60}
            >
              <ChevronRightIcon w={12} h={10} />
            </Button>
          </Box>
        </Flex>
      </Box>

    <Flex  gap={15} pos='fixed' top={450} left={450}>
      <Text fontSize='sm' >NEW</Text>
      <Text fontSize='sm' >NEW COLLECTION</Text>
      <Text fontSize='sm' >SHOES</Text>
      <Text fontSize='sm' >SALE</Text>
    </Flex>

      <Box height="200%">
        <video width="cover" height='100%' autoPlay="autoPlay" loop={true} muted>
          <source src={arr[ind].video} type="video/mp4" />
        </video>
      </Box>
      <Box mt="-10%">
        <img src={arr[ind].image2} alt="" width="100%" height="50%" />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
