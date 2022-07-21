import { Box, Container, Input, Stack } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar';

function Login() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>

      <Box mt={200}>
        <Container>
          <Stack spacing={3}>
             
            <Input placeholder="medium size" size="md" borderBottom={20} borderBottomColor='black' />
           
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Login
