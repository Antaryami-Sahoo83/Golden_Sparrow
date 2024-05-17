import React from "react";
import "./signup.css";
import "../signin/Signin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import gif1 from "../../components/resources/gif8.gif";
import gif2 from "../../components/resources/gif10.gif";
import gif3 from "../../components/resources/gif7.gif";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Grid,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Center,
  FormControl,
  FormLabel,
  Button,
  Text,
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

function SignUp() {
  const gifMap = {
    email: gif1,
    password: gif2,
    error: gif3,
  };

  const [displayedGif, setDisplayedGif] = useState(gif1);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const handleFieldChange = (event) => {
    const inputType = event.target.type;
    const val = event.target.value;
    if (!val) {
      setDisplayedGif(gifMap.email);
    } else if (val) {
      setDisplayedGif(gifMap.password);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    let errors = {};
    setIsError(false);

    if (!mobile) {
      errors.mobile = "Mobile Number is required";
      toast.error(errors.mobile);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (mobile.length < 10 || mobile.length > 10) {
      errors.mobile = "Mobile Number is not a valid one !";
      toast.error(errors.mobile);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (!validateEmail(email) || email === "") {
      errors.email = "Please check your Email";
      toast.error(errors.email);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (!fname) {
      errors.fname = "First Name is required";
      toast.error(errors.fname);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (!lname) {
      errors.lname = "Last Name is required";
      toast.error(errors.lname);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (!validatePassword(pass)) {
      errors.pass = "Password must be at least 6 characters long";
      toast.error(errors.pass);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    } else if (pass !== pass1) {
      errors.pass1 = "Passwords do not match";
      toast.error(errors.pass1);
      setIsError(true);
      setDisplayedGif(gifMap.error);
    }

    // If there are any errors, set them to the errorMessages state and return
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errorMessages);
      return;
    }

    try {
      const obj = {
        mob: mobile,
        email: email,
        fname: fname,
        lname: lname,
        pass: pass,
        cpass: pass1,
        gender: gender,
      };
      console.log(obj);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/customer/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      console.log(response);
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        toast.success("Sign Up Successfull !!");
        navigate("/signin");
      } else {
        const err = await response.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };
  return (
    <>
      <Navbar />
      <ChakraProvider theme={theme}>
        <div className="gifCss">
          <img className="gif-image" src={displayedGif} alt="GIF" />
        </div>
        <div id="title">
          <Text>Hey, Unlock the Charms of Glamour!</Text>
        </div>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box p={0} mb={{ base: "30rem", md: "10rem" }}>
          <Center h="40vh">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={7}
              maxW="600px"
              mt={{ base: "27rem", md: "7rem", lg: "7rem" }}>
              <FormControl isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+91" />
                  <Input
                    id="mob"
                    type="tel"
                    placeholder="Mobile Number"
                    variant={"outline"}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      handleFieldChange(e);
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    minLength={10}
                    maxLength={10}
                    required
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  id="email"
                  variant="outline"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    validateEmail(email);
                    setEmail(e.target.value);
                    handleFieldChange(e);
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  id="fname"
                  variant={"outline"}
                  placeholder="First Name"
                  onChange={(e) => {
                    setFname(e.target.value);
                    handleFieldChange(e);
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  id="lname"
                  variant={"outline"}
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLname(e.target.value);
                    handleFieldChange(e);
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  variant={"outline"}
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPass(e.target.value);
                    handleFieldChange(e);
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  id="password1"
                  variant={"outline"}
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setPass1(e.target.value);
                    handleFieldChange(e);
                  }}
                />
              </FormControl>
              <Flex
                justify="space-between"
                direction={{ base: "column", md: "row" }}>
                <RadioGroup>
                  <Stack spacing={5} direction="row">
                    <Radio
                      as={"button"}
                      colorScheme="blue"
                      value="1"
                      onClick={(e) => {
                        setGender("Male");
                      }}>
                      Male
                    </Radio>
                    <Radio
                      as={"button"}
                      colorScheme="pink"
                      value="2"
                      onClick={(e) => {
                        setGender("Female");
                      }}>
                      Female
                    </Radio>
                    <Radio
                      as={"button"}
                      colorScheme="green"
                      value="3"
                      onClick={(e) => {
                        setGender("Other");
                      }}>
                      Others
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
              <Button
                id="signup"
                colorScheme="purple"
                mt={{ base: 4, md: 0 }}
                onClick={handleSignup}>
                Sign Me Up!
              </Button>

              <Box height="8vh" mt={"5%"} gap={5} display={"flex"}>
                <Text mt={2} w={"10rem"}>
                  Already a member?{" "}
                </Text>
                <Link to={"/signin"}>
                  <Button
                    variant={"outline"}
                    fontWeight={"700"}
                    fontSize={"1rem"}
                    pl={"1rem"}
                    bg={"pink"}>
                    LOG IN NOW
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Center>
        </Box>
      </ChakraProvider>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default SignUp;
