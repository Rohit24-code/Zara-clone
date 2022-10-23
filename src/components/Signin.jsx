import { Box, Button, Container, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Signin() {
  const toast = useToast()
  const nav = useNavigate()
  let [data,setData] = useState([])
  let [submit,setsubmit]= useState(false)
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

      const getdata=()=>{
         axios
           .get(" https://zaraclone-json-data.herokuapp.com/userData")
           .then((res) => setData(res.data));
      }
     useEffect(()=>{
      getdata()
     },[])

     const postdata=async(user)=>{
       await axios({
          url: "https://zaraclone-json-data.herokuapp.com/userData",
          method: "POST",
          data: {
            ...user,
            id: Date.now(),
          },
        })
        toast({
          title: "Account created.",
          description: "You have Successfully signed in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        // nav("/login")
     }
  // console.log(data);
      const handleChange=(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
      }
      const handleSubmit = () => {
        let ndata = data.filter((e) => e.email === user.email);
        if (ndata.length > 0) {
            return    toast({
              position: 'top',
                  title: "Account not created.",
                  description: `Already have a account with ${user.email}`,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
        } else if (user.email.length === 0) {
          return toast({
            position: 'top',
            title: "Account not created.",
            description: `Please enter email`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else if (user.password.length === 0) {
          return toast({
            position: 'top',
            title: "Account not created.",
            description: `Please Enter Password`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else if (user.password.length < 8) {
          return toast({
            position: 'top',
            title: "Account not created.",
            description: `Password should be of 8 characters`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else if (user.name.length === 0) {
                return toast({
                  position: 'top',
                  title: "Account not created.",
                  description: `Please Enter Name`,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
        } else if (user.address.length === 0) {
                return toast({
                  position: 'top',
                  title: "Account not created.",
                  description: `Please Enter Address`,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
        } else if (user.locality.length === 0) {
                return toast({
                  position: 'top',
                  title: "Account not created.",
                  description: `Please Enter Locality`,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
        } else if (user.state.length === 0) {
                return toast({
                  position: 'top',
                  title: "Account not created.",
                  description: `Please Enter State`,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
        }
        else{
               setsubmit(true);
               postdata(user);
               setUser({
                 email: "",
                 password: "",
                 name: "",
                 address: "",
                 locality: "",
                 state: "",
               });
        }
      };


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
              <Button onClick={ () =>{
                  handleSubmit()
              } 
                } bgColor="black" color="white">
                CREATE ACCOUNT
              </Button>
          </Box>
        </Box>
      </Container>
      <Footer />

    </Box>
  );
}

export default Signin
