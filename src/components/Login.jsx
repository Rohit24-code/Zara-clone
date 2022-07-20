import { Box, Container, Input, Stack } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar';

function Login() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      {/* <Box> */}
      <Box mt={200}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Box>
      {/* </Box> */}
    </>
  );
}

export default Login
