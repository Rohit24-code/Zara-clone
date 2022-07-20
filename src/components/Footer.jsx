import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box height="380px">
      <Flex align="center" justify="center" mt="15%">
        <Text fontSize="md">JOIN OUR NEWSLETTER</Text>
      </Flex>

      <Box>
        <Flex align="center" justify="center" mt="10%">
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              Instagram
            </Text>
          </Box>
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              Twitter
            </Text>
          </Box>
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              Facebook
            </Text>
          </Box>
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              PInterest
            </Text>
          </Box>
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              Youtube
            </Text>
          </Box>
          <Box p="2">
            <Text fontSize="sm" fontWeight={300}>
              spotify
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box p="2" mt={20} ml='15%'>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Name and address of the manufacturer:
        </Text>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Industria de Diseño Textil, S.A. (INDITEX, S.A.)
        </Text>
        <Text fontSize="xs" lineHeight={1.2} fontWeight={300}>
          Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña),
          Spain
        </Text>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Footer
