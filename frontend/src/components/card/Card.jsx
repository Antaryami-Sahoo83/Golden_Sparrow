import React, { useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Center,
  Flex,
  IconButton,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set 'dark' if you want to start with dark mode by default
    useSystemColorMode: false, // Set to true if you want to use the user's system preference for dark mode
  },
});

const PCard = ({ image, link, product, value, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { colorMode } = useColorMode(); // Get the current color mode (light or dark)
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    setIsFavorite((prevState) => !prevState);
  };
  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  const token = JSON.parse(localStorage.getItem("token"));

  const handleCart = async () => {
    if (token) {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/jewellery/addtocart/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          toast.success("Product Added to Cart !");
        } else {
          const err = await res.json();
          throw new Error(err);
        }
      } catch (error) {
        alert(error.msg);
      }
    } else {
      navigate("/signin");
    }
  };

  return (
    <Card
      maxW="sm"
      m={{ base: "3%", md: "1%" }}
      p={"1%"}
      border={"1px solid black"}
      bg={colorMode === "dark" ? "gray.700" : "white"}
      borderRadius={"20px"}>
      <Flex justifyContent="flex-end">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="gray"
          aria-label="Toggle Wishlist"
          fontSize="20px"
          icon={isFavorite ? <FcLike /> : <FiHeart />}
          onClick={handleWishlistClick}
          color={
            isFavorite ? "red.500" : colorMode === "dark" ? "white" : "gray.600"
          }
        />
      </Flex>
      <CardBody>
        <Center>
          <div className="container">
            <img src={image} alt="" />
          </div>
        </Center>
        <Stack mt="6" spacing="1">
          <Heading size="md">Rs: {value}/-</Heading>
          <Text
            color={colorMode === "dark" ? "white" : "black.400"}
            fontSize="sm">
            {product}
          </Text>
          <Text
            fontSize="xs"
            color={colorMode === "dark" ? "gray.300" : "black.500"}>
            {link}
          </Text>
        </Stack>
      </CardBody>
      <ButtonGroup spacing="3" m="auto" size="sm" pb={{ base: "1%", md: "2%" }}>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={() => handleClick()}>
          Show Details
        </Button>
        <Button variant="outline" colorScheme="purple" onClick={handleCart}>
          Add to cart
        </Button>
      </ButtonGroup>
      <ToastContainer />
    </Card>
  );
};

export default PCard;
