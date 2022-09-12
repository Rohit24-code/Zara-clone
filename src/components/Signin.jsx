import { Box, Button, Container, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Signin() {
  const toast = useToast()
      const [user, setUser] = useState(
        {
          email: "",
          password: "",
          name: "",
          address: "",
          locality: "",
          state: "",
        }
      );


      const handleChange=(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
      }
      const handleSubmit=()=>{
        if(user.email.length===0){
            alert("Enter email")
        }
        else if(user.password.length===0){
          alert("Enter password")
        }
        else if(user.name.length===0){
          alert("Enter name")
        }
        else if(user.address.length===0){
          alert("Enter address")
        }
        else if(user.locality.length===0){
          alert("Enter locality")
        }
        else if(user.state.length===0){
          alert("Enter state")
        }
     
        axios({
          url: "https://zaraclone-json-data.herokuapp.com/userData",
          method: "POST",
          data: {
            ...user,
            id: Date.now(),
          },
        });

        setUser({
          email: "",
          password: "",
          name: "",
          address: "",
          locality: "",
          state: ""
        });
      }


  return (
    <Box>
      <Container>
        <Box mt="35%">
          <Text fontSize="md" fontWeight="600">
            PERSONAL DETAILS
          </Text>
        </Box>
        <Box>
          <Text fontSize="xs" fontWeight="600" mt="10%">
            PERSONAL
          </Text>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              E-MAIL
            </Text>
            <Input
              onChange={handleChange}
              name="email"
              value={user.email}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              PASSWORD
            </Text>
            <Input
              onChange={handleChange}
              name="password"
              value={user.password}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              NAME
            </Text>
            <Input
              onChange={handleChange}
              name="name"
              value={user.name}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              ADDRESS
            </Text>
            <Input
              onChange={handleChange}
              name="address"
              value={user.address}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              LOCALITY
            </Text>
            <Input
              onChange={handleChange}
              name="locality"
              value={user.locality}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="200" mt="10%">
              STATE
            </Text>
            <Input
              onChange={handleChange}
              name="state"
              value={user.state}
              border="none"
              borderRadius="none"
              borderColor="black"
              borderBottom="1px"
              type="text"
            />
          </Box>
          <Box ml="25%" mt="15%">
            <Link to="/login">
              <Button onClick={ () =>{

                  handleSubmit()
                  user.email && user.password && user.address && user.name && user.locality && user.state
                    ?( toast({
                        title: "Account created.",
                        description: "You have Successfully signed in.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      }))
                    : toast({
                        title: "Account not created.",
                        description: "Please fill all the sections",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });

              }
              
                } bgColor="black" color="white">
                CREATE ACCOUNT
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <Footer />

    </Box>
  );
}

export default Signin
