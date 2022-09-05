import React from 'react'
import { Box} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box pos='absolute'  left="45%" >
        <img src="loading.gif" alt="" />
    </Box>
  )
}

export default Loading
