import React from 'react'
import { Box} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box  as='div' width='100vw' height='100vh'  style={{backgroundImage:`url("loading.gif")`}}>
      {/* <img  src="jumpingletters.gif" alt="" /> */}
    </Box>
  );
}

export default Loading
