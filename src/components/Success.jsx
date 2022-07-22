import React, { useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Success() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  useEffect(() => {
    setOverlay(<OverlayTwo />);
    onOpen();
  }, []);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      {/* <Button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          Use Overlay one
        </Button> */}
      {/* <Button
          ml="4"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          Use Overlay two
        </Button> */}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader ml="32%">
            <img
              src="https://c.tenor.com/BSY1qTH8g-oAAAAC/check.gif"
              width="120px"
              alt=""
            />
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody ml="25%">
            <Text>Hurray! Payment successfull</Text>
            <Text ml="-25px">Transaction Id : {Math.random() * 10 ** 17}</Text>
          </ModalBody>
          <ModalFooter mr="25%">
            <Link to="/">
              <Button
                bgColor="#6ea83a"
                color="white"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Success;
