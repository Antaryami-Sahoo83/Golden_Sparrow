import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Cart({ image, link, value, product, category, id }) {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const handleCart = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/jewellery/deletefromcart/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        toast.error("Product Removed from the cart (:");
      } else {
        const err = await res.json();
        throw new Error(err);
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <Box boxShadow="2xl" p="1" m="1" rounded="md" bg="white">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="filled">
        <Image
          objectFit="cover"
          src={image}
          maxW={{ base: "100%", sm: "150px" }}
          alt=""
        />

        <Stack>
          <CardBody>
            <Heading size="sm" mb="5">
              {link}
            </Heading>

            <Text fontSize="sm">
              Category: {category}, {product}
            </Text>
            <Text py="2" fontSize="xl">
              Rs: {value} /-
            </Text>
          </CardBody>
        </Stack>
        <Flex flexWrap="wrap" justifyContent="flex-end" alignItems="center">
          <IconButton
            m="4"
            size="sm"
            isRound={true}
            variant="solid"
            colorScheme="red"
            aria-label="Done"
            fontSize="15px"
            onClick={handleCart}
            icon={<DeleteIcon />}
          />
        </Flex>
      </Card>
      <ToastContainer />
    </Box>
  );
}

export default Cart;
