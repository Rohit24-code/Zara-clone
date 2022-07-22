import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Appcontext } from '../Context/AppContext';
import Footer from './Footer';

function Selection() {
    let nday = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day=(nday[new Date().getDay()])
    let month = monthNames[new Date().getMonth()];
    let date=(new Date().getUTCDate()+3);

      const { state, dispatch, total } = useContext(Appcontext);
    
  return (
    <Box>
      <Box mt={150} mr="190px" ml="190px">
        <Text fontSize="md" fontWeight={700}>
          CHOOSE YOUR SHIPPING METHOD
        </Text>

        <Box mt="7">
          <Text fontSize="md" fontWeight={700}>
            IN-STORE PICK UP
          </Text>
          <Flex
            justify="space-between"
            borderTop="1px"
            borderBottom="1px"
            p="8px"
            borderColor="black.300"
          >
            <Box>
              {day} {date} ,{month}
            </Box>
            <Text fontSize="md" fontWeight={700}>
              Free
            </Text>
          </Flex>
        </Box>

        <Box mt={38}>
          <Text fontSize="md" fontWeight={700}>
            HOME DELIVERY
          </Text>
          <Flex
            justify="space-between"
            borderTop="1px"
            borderBottom="1px"
            p="8px"
            borderColor="black.300"
          >
            <Box>
              <Box>
                <Text>
                  {day} {date} ,{month}
                </Text>
              </Box>
              <Box>
                <Text>TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS</Text>
              </Box>

              <Box>
                <Text>FREE SHIPPING FOR ORDERS OVER ₹ 2,990</Text>
                <Text>DELIVERY TIME FRAMES</Text>
              </Box>
            </Box>

            <Box>
              <Text fontSize="md" fontWeight={700}>
                Free
              </Text>
            </Box>
          </Flex>
        </Box>
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
              <Link to="/Payment">
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

export default Selection
