import React from 'react'
import {  Flex , Box} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box pos='absolute'  left="50%" mt="40vh">
        <img src="loading.gif" alt="" />
    </Box>
  )
}

export default Loading
