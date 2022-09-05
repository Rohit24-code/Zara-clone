import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Login() {
   const toast = useToast();
  const { loggedin,setLoggedin } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(" https://zaraclone-json-data.herokuapp.com/userData")
      .then((res) => setData(res.data));
  }, []);

  const [login, setlogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };
  const handleSubmit = () => {
    let ndata = data.filter(
      (el) => el.email == login.email && el.password == login.password
    );
    setLoggedin(ndata);
    setlogin({email:"", password:""})

  };
console.log(data);


  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Box mt={200} ml="16%">
        <Flex gap={20}>
          {/* <form> */}
            <Box>
              <Text fontSize="md" fontWeight="600">
                LOG IN
              </Text>
              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  E-MAIL
                </Text>
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  onChange={handleChange}
                  value={login.email}
                  name="email"
                  type="text"
                  placeholder="enter email...."
                />
              </Box>
              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  PASSWORD
                </Text>
                <Input
                  border="none"
                  borderRadius="none"
                  borderColor="black"
                  borderBottom="1px"
                  onChange={handleChange}
                  value={login.password}
                  name="password"
                  type="password"
                  placeholder="enter password...."
                />
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  HAVE YOU FORGOTTEN YOUR PASSWORD?
                </Text>
              </Box>
              <Box mt="15%">
                <Button
                  type="submit"
                  bgColor="black"
                  color="white"
                  onClick={()=>{
                    
                    handleSubmit()
                  
                    loggedin.length===0 ? (  toast({
            title: "Please Log In",
            status: "error",
            isClosable: true,
          })) : (
            // <Navigate to="/cart"/>
            toast({
                    title: "Account created.",
                    description: "Logged in Successfully",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
          )
                  }}
                >
                  LOG IN
                </Button>
              </Box>
            </Box>
          {/* </form> */}

          {loggedin.length === 0 ? (
            <Box>
              <Text fontSize="md" fontWeight="600">
                REGISTER
              </Text>

              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE <br />
                  THIS OPTION TO ACCESS THE REGISTRATION FORM.
                </Text>
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="600" mt="10%">
                  BY GIVING US YOUR DETAILS, PURCHASING IN
                  <br /> ZARA.COM WILL BE FASTER AND AN ENJOYABLE
                  <br /> EXPERIENCE.
                </Text>
              </Box>

              <Box>
                <Link to="/signin">
                  <Button mt="30%" bgColor="black" color="white">
                    Create Account
                  </Button>
                </Link>
              </Box>
            </Box>
          ) : (
            <Box>
              <Text>NOT YOU?</Text>
              <Text>
                PLEASE,
                <Link to="/signin">
                  <strong
                    style={{
                      borderBottom: "1px solid black",
                      cursor: "pointer",
                    }}
                  >
                    SIGN OUT
                  </strong>
                </Link>
                TO BEGIN BROWSING AS
              </Text>
              <Text>AN ANONYMOUS USER.</Text>
            </Box>
          )}

          {/* */}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}

export default Login;
