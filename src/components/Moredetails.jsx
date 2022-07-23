import React, { useContext } from 'react'
import { SingleContext } from '../Context/singleContext';
import { Box, Text, Container, Flex, Button } from "@chakra-ui/react";
import Footer from './Footer';
import { Appcontext } from '../Context/AppContext';
import { useDisclosure } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input
} from "@chakra-ui/react";
import './moredetails.css'
function Moredetails() {
   const { pagedata, setPagedata } = useContext(SingleContext);
    const { state, dispatch } = useContext(Appcontext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

  return (
    <Box>
      <Box mt="84px" alignItems="center" ml="16%" className="scrolldetails">
        <Flex gap={20}>
          <Box width="200px" mt="92px">
            <Text>MATERIALS, CARE AND ORIGIN </Text>
            <Text mt={8}>ORIGIN</Text>
            <Text
              mt={8}
              style={{ maxHeight: "200px", overflow: "auto" }}
              fontSize="sm"
              fontWeight="300"
            >
              We work alongside our suppliers, workers, unions and international
              bodies to develop a supply chain that respects and promotes human
              rights, contributing to the United Nations Sustainable Development
              Goals. Additionally, thanks to an ongoing collaboration with our
              suppliers, we have developed a tracking programme that allows us
              to determine where and how our products are being made. Made in
              Vietnam CARE Caring for your clothes is caring for the
              environment. Lower temperature washes and delicate spin cycles are
              gentler on garments and help to protect the colour, shape and
              structure of the fabric. Furthermore, they reduce the amount of
              energy used in care processes. [car]7 Machine wash at max.
              30ºC/86ºF with short spin cycle [car]14 Do not use bleach [car]18
              Iron at a maximum of 110ºC/230ºF [car]125 Dry clean with
              tetrachloroethylene [car]35 Do not tumble dry MATERIALS We work
              with monitoring programmes to ensure compliance with safety,
              health and quality standards for our products. The Green to Wear
              2.0 standard aims to minimise the environmental impact of textile
              manufacturing. To that end, we have developed Inditex’s The List
              programme, which helps guarantee both that production processes
              are clean and that our garments are safe and healthy. OUTER SHELL
              74% polyester · 20% viscose · 6% elastane View Less
            </Text>
          </Box>
          <Box width="250px">
            <img src={pagedata.imgUrl} alt="" />
          </Box>
          <Box width="200px">
            <Text mt={8}>{pagedata.prod_name}</Text>
            <Text
              style={{ maxHeight: "200px", overflow: "auto" }}
              mt={8}
              fontSize="sm"
              fontWeight="300"
            >
              {pagedata.material}
            </Text>
            <Text mt={8}>₹{pagedata.price}</Text>
            <Text>Mrp included of all tax</Text>

            <Box mt={8} borderTop="1px" borderBottom="1px" borderColor="black">
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "	#D3D3D3", cursor: "pointer" }}
              >
                XS
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                {" "}
                S{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                M
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                L
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XL{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XXL
              </Text>
            </Box>

            <Flex mt={8} justify="space-between">
              <Text fontSize="xs" fontWeight="200">
                Find your size
              </Text>
              <Text fontSize="xs" fontWeight="200">
                Guide
              </Text>
            </Flex>

            <Box>
              {/* { state.cart.some((el) => el._id === pagedata._id */}
              {/* ) */}
              {/* ? ( */}
              {/*<Button
            //   bg="black"
            //   color="white"
            //   mt={8}
            //   onClick={() =>
                // dispatch({ type: "Delete_from_cart", payload: pagedata })
            //   }
            >
              {/* Delete from Bag */}
              {/* </Button> */}
              {/* ) : ( */}
              <Button
                ref={btnRef}
                bg="black"
                color="white"
                mt={8}
                onClick={() => {
                  dispatch({ type: "Add_to_cart", payload: pagedata });
                  onOpen();
                }}
              >
                Add to Bag
              </Button>
              {/* )} */}
              {/* <Button
              bg="black"
              color="white"
              mt={8}
              onClick={() => dispatch({ type: "Add_to_cart", payload: pagedata })}
            >
              Add to Bag
            </Button> */}
            </Box>

            <Text fontSize="xs" fontWeight='200' mt={8}>
              DELIVERY, EXCHANGES AND RETURNS
            </Text>
          </Box>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart</DrawerHeader>

            <DrawerBody>
              <Box maxHeight="350px" overflow="auto" mt="20px" p="2px">
                {state.cart.map((el) => {
                  return (
                    <Box mt={9} key={el._id}>
                      <Flex justify="space-around">
                        <Box>
                          <Text mb={8}>{el.prod_name}</Text>
                          <img width="280px" src={el.imgUrl} alt="" />
                        </Box>
                        <Box>
                          <Text fontSize="md" fontWeight='200' mt={20}>
                            ₹ {el.price}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
            </DrawerBody>
            <Box border="1px" borderColor="black" width="100%" bg="black"></Box>
            <DrawerFooter>
              <Link to="/cart">
                <Button bg="black" color="white" width="250%" ml='-200%'>
                  Go To Basket
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Footer />
    </Box>
  );
}

export default Moredetails
