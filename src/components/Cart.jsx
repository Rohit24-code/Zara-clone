import React, { useContext } from 'react'
import {
  Box,
  Button,
  Flex,
  Text,

} from "@chakra-ui/react";
import Footer from './Footer';
import { Appcontext } from '../Context/AppContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { state, dispatch ,total} = useContext(Appcontext);
  return (
    <Box>
      <Box ml="195px">
        <Flex mt={150} gap="35px">
          <Text fontSize="lg" fontWeight="500">
            CART ({state.cart.length})
          </Text>
          <Text fontSize="lg" fontWeight={300}>
            WISHLIST
          </Text>
        </Flex>

        <Box bg="#f2f2f2" p="1%" mr="50%" mt="9px">
          <Text fontSize="xs" fontWeight="200">
            Items in the basket are not reserved until completing the purchase.
          </Text>
        </Box>

        <Flex flexWrap="wrap">
          {state.cart.map((el, i) => {
            return (
              <Box mt={30} key={i}>
                <Flex>
                  <Flex p="20px" gap={7}>
                    <Box>
                      <Text mb={8}>{el.prod_name}</Text>
                      <img
                        width="200px"
                        height="340px"
                        src={el.imgUrl}
                        alt=""
                      />
                    </Box>
                    <Box mt="20px">
                      <Text fontSize="xs" fontWeight="200" mt={10}>
                        REF. | 6050/179
                      </Text>
                      <Text fontSize="xs" fontWeight="200" mt={10}>
                        {el.size}
                      </Text>
                      <Flex mt={2}>
                        <Button
                          fontSize="xs"
                          fontWeight="200"
                          bgColor="transparent"
                          onClick={() =>
                            dispatch({ type: "Decrease_qty", payload: el })
                          }
                        >
                          -
                        </Button>
                        <Text fontSize="xs" fontWeight="200" mt={2}>
                          {el.qty}
                        </Text>
                        <Button
                          fontSize="xs"
                          fontWeight="200"
                          bgColor="transparent"
                          onClick={() =>
                            dispatch({ type: "Increase_qty", payload: el })
                          }
                        >
                          +
                        </Button>
                      </Flex>
                      <Text fontSize="xs" fontWeight="200" mt={10}>
                        ₹{el.price}
                      </Text>
                      <Box>
                        <Text
                          fontSize="xs"
                          fontWeight="200"
                          _hover={{ borderBottom: "1px", cursor: "pointer" }}
                          mt={12}
                        >
                          Save for later
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight="200"
                          _hover={{ borderBottom: "1px", cursor: "pointer" }}
                          onClick={() =>
                            dispatch({ type: "Remove_from_cart", payload: el })
                          }
                          mt={2}
                        >
                          Delete
                        </Text>
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
        </Flex>
        <Box bgColor="white">
          <Flex
            justify="center"
            align="center"
            pos="fixed"
            bottom="1px"
            right="5px"
            gap="20px"
          >
            <Box bgColor="white">
              <Text fontSize="xs" lineHeight="12px" fontWeight="700">
                TOTAL ₹ {total.toFixed(2)}
              </Text>
              <Text fontSize="xs" lineHeight="12px">
                INCLUDING GST{" "}
              </Text>
              <Text fontSize="xs" lineHeight="12px">
                * EXCL SHIPPING COST
              </Text>
            </Box>
            <Box>
              <Link to="/selection">
                <Button
                  width="250px"
                  bg="black"
                  color="white"
                  alignItems="center"
                >
                  Continue
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Cart
