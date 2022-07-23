import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Appcontext } from '../Context/AppContext';
import Footer from './Footer';

function Payment() {
     const { state, dispatch, total } = useContext(Appcontext);
  return (
    <Box>
      <Box mt={40} mr="190px" ml="190px">
        <Text>CHOOSE A PAYMENT METHOD</Text>

        <Box border="1px" borderColor="orange.300" p={3} mt="40px" mr="250px">
          <Text color="orange.300" fontSize="xs"  fontWeight="200">
            Please note that only cards that use 3D Secure are accepted. Contact
            your bank to activate it or for
            <br /> further instructions.
          </Text>
        </Box>

        <Flex mt="50px" gap="5px">
          <Box
            border="1px"
            borderColor="black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
              alt=""
            />
            <span>VISA</span>
          </Box>

          <Box
            border="1px"
            borderColor="black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-mastercard.svg"
              alt=""
            />
            <span>MASTERCARD</span>
          </Box>

          <Box
            border="1px"
            borderColor="black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/icon-payment-amex_2.svg"
              alt=""
            />
            <span>AMERICAN EXPRESS</span>
          </Box>

          <Box
            border="1px"
            borderColor="black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/ru-pay.svg"
              alt=""
            />
            <span>RUPAY</span>
          </Box>

          <Box
            border="1px"
            borderColor="black"
            textAlign="center"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
          >
            <img
              src="https://static.zara.net/static/images/payment/payment/net-banking.svg"
              alt=""
            />
            <span>NETBANK</span>
          </Box>

          <Box border="1px" borderColor="black" textAlign="center">
            <img
              src="https://static.zara.net/static/images/payment/payment/upi.svg"
              alt=""
            />
            <span>UPI</span>
          </Box>
        </Flex>

        <Box
          mt="8px"
          border="1px"
          borderColor="black"
          marginRight="700px"
          textAlign="center"
          boxShadow="rgb(0,0,0,0.75px)"
          _hover={{ cursor: "pointer", padding: "5px" }}
        >
          <img
            src="https://static.zara.net/static/images/payment/payment/co-djpen.svg"
            alt=""
          />
          <span>Cash On Delivery</span>
        </Box>

        <Box
          mt="8px"
          border="1px"
          borderColor="black"
          marginRight="700px"
          textAlign="center"
          boxShadow="rgb(0,0,0,0.75px)"
          _hover={{ cursor: "pointer", padding: "5px" }}
        >
          <img
            src="https://static.zara.net/static/images/payment/payment/in.svg"
            alt=""
          />
          <span>In Card</span>
        </Box>

        <Box bgColor="white">
          <Flex
            justify="center"
            align="center"
            pos="fixed"
            bottom="1px"
            right="5px"
            gap="20px"
            boxShadow="rgb(0,0,0,0.75px)"
            _hover={{ cursor: "pointer", padding: "5px" }}
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
              <Link to="/success">
                <Button
                  width="250px"
                  bg="black"
                  color="white"
                  alignItem="center"
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

export default Payment
