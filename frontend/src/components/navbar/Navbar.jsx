import { ReactNode, useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  ButtonGroup,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  background,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { TbHomeEco } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineGold } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
  ReactIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import "./navbar.css";
import { Image } from "@chakra-ui/react";
import { AppContext } from "../../context";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const token = JSON.parse(localStorage.getItem("token"));

  const [AllDataArr, setAllDataArr] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const handlePara = (id) => {
    console.log(id);
    navigate(`/details/${id}`);
    setSearchData([]);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  const navigate = useNavigate();

  const data = useContext(AppContext);

  /*Search*/
  const handleSearch = (str) => {
    console.log(str);
    const rData = data.filter((item) =>
      item.link.toLowerCase().includes(str.toLowerCase())
    );
    console.log(rData);
    setSearchData(rData.slice(0, 10));
    if (!str) {
      setSearchData([]);
    }
  };

  const [str, setStr] = useState("");
  function handleRing() {
    setStr("Ring");
    localStorage.setItem("product", JSON.stringify(str));
  }

  function handleBrac() {
    setStr("Bracelet");
    localStorage.setItem("product", JSON.stringify(str));
  }
  /* Search Over*/
  return (
    <>
      <Box
        color={useColorModeValue("black", "black")}
        px={4}
        bgColor={"#eddff0"}
        minWidth={"-webkit-fit-content"}
      >
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor={"#eddff0"}
        >
          <IconButton
            color={useColorModeValue("black", "black")}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={"flex"}
              w={{ base: "10rem", md: "15rem" }}
              fontSize={{ sm: "10px", md: "20px" }}
              mt={"1%"}
            >
              <ReactIcon mr={"8px"} fontSize={{ md: "35px" }} />
              <Link to={"/"}>
                <Image src={logo}></Image>
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "none", lg: "flex" }}
              mr={"10px"}
            >
              <ButtonGroup fontWeight={"300"} spacing={5}>
                <Button
                  variant={"unstyled"}
                  leftIcon={<TbHomeEco />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn"
                >
                  FREE TRY AT HOME
                </Button>

                <Button
                  variant={"unstyled"}
                  leftIcon={<FaHandHoldingHeart />}
                  fontWeight={"300"}
                  fontSize={"xs"}
                  className="abtn"
                >
                  PLAN OF PURCHASE
                </Button>
              </ButtonGroup>
              <InputGroup display={{ base: "none", md: "none", lg: "block" }}>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="black" />
                </InputRightElement>
                <Input
                  onChange={(el) => handleSearch(el.target.value)}
                  type="text"
                  placeholder="Search Here.."
                  bg={useColorModeValue("white", "#eee")}
                />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ButtonGroup display={{ base: "none", md: "none", lg: "flex" }}>
              <Link to={"/signup"}>
                <Button
                  variant={"solid"}
                  id="signup"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d63feb, #b06df8, #9187f7, #8299ec, #88a6d9)",
                  }}
                  display={token ? "none" : "flex"}
                >
                  {" "}
                  Signup
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("purple", "purple")}
                  display={token ? "none" : "flex"}
                >
                  Login
                </Button>
              </Link>
              <Link>
                <Button
                  variant={"outline"}
                  colorScheme="purple"
                  color={useColorModeValue("purple", "purple")}
                  display={token ? "flex" : "none"}
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </Link>
              <Button variant={"unstyled"}>
                <Icon className="abtn" as={AiFillHeart} />
              </Button>
              <Link to={"/addtocart"}>
                <Button variant={"unstyled"}>
                  <Icon className="abtn" as={BsHandbagFill} />
                </Button>
              </Link>
              <Button
                onClick={toggleColorMode}
                variant={"unstyled"}
                className="abtn"
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </ButtonGroup>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color={"black"}
              >
                <Button variant={"unstyled"} className="abtn">
                  <Icon as={FaUserAlt} />
                </Button>
              </MenuButton>
              <MenuList color={useColorModeValue("black", "white")}>
                <MenuItem display={token ? "none" : "block"}>
                  <Link to={"/signup"}>
                    <Button variant={"unstyled"}>Signup</Button>
                  </Link>
                </MenuItem>

                <MenuItem display={token ? "none" : "block"}>
                  <Link to={"/signin"}>
                    <Button variant={"unstyled"}>Login</Button>
                  </Link>
                </MenuItem>

                <MenuItem display={token ? "block" : "none"}>
                  <Link>
                    <Button variant={"unstyled"} onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Button variant={"unstyled"}>Profile</Button>
                </MenuItem>
                <MenuItem>
                  <Link to={"/addtocart"}>
                    <Button variant={"unstyled"}>Cart</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button onClick={toggleColorMode} variant={"unstyled"}>
                    {colorMode === "light" ? "Dark Theme" : "Light Theme"}
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <InputGroup bg={"white"}>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="black" />
                </InputRightElement>
                <Input
                  onChange={(el) => handleSearch(el.target.value)}
                  type="text"
                  placeholder="Search Here.."
                />
              </InputGroup>
              <ButtonGroup
                variant={"unstyled"}
                display={"flex"}
                flexDirection={"column"}
                onClick={isOpen ? onClose : onOpen}
              >
                <Spacer />
                <Link>
                  <Button as={Button} className="btn">
                    FREE TRY AT HOME
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    PLAN OF PURCHASE
                  </Button>
                </Link>
                <Link>
                  <Button as={Button} className="btn">
                    DIGITAL GOLD
                  </Button>
                </Link>

                <Link to={"/jwellery/Bestseller"}>
                  <Button as={Button} className="btn">
                    BEST SELLERS
                  </Button>
                </Link>
                <Link to={"/jwellery/Bangle"}>
                  <Button as={Button} className="btn">
                    Bangle
                  </Button>
                </Link>
                <Link to={"/jwellery/Ring"}>
                  <Button as={Button} className="btn" onClick={handleRing}>
                    RINGS
                  </Button>
                </Link>
                <Link to={"/jwellery/Bracelet"}>
                  <Button as={Button} className="btn" onClick={handleBrac}>
                    BRACELETS
                  </Button>
                </Link>
                <Link to={`/jwellery/Earrings`}>
                  <Button as={Button} className="btn">
                    EARRINGS
                  </Button>
                </Link>
                <Link to={"/jwellery/Chain"}>
                  <Button className="btn">CHAINS</Button>
                </Link>
                <Link to={"/jwellery/Kada"}>
                  <Button className="btn">KADA</Button>
                </Link>
                <Link to={"/jwellery/Haram"}>
                  <Button>HARAM</Button>
                </Link>
                <Link to={"/jwellery/Jewellery Set"}>
                  <Button>JEWELLERY SET</Button>
                </Link>
                <Link to={"/jwellery/Maang Tikka"}>
                  <Button>MAANG TIKKA</Button>
                </Link>
                <Link to={"/jwellery/Mangalsutra"}>
                  <Button>MANGALSUTRAS</Button>
                </Link>
                <Link to={"/jwellery/Necklace"}>
                  <Button>NECKLACES</Button>
                </Link>
                <Link to={"/jwellery/Pendant"}>
                  <Button>PENDENT</Button>
                </Link>
              </ButtonGroup>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box>
        <Box
          boxShadow="md"
          p="2"
          bg={useColorModeValue("white", "black")}
          minWidth={"-moz-fit-content"}
          display={{ base: "none", md: "none", lg: "block" }}
        >
          <ButtonGroup
            justifyContent={"space-around"}
            display={"flex"}
            variant={"unstyled"}
            ml={"10rem"}
            mr={"10rem"}
            flexWrap={"wrap"}
            color={useColorModeValue("black", "white")}
          >
            <Link to={"/jwellery/Bestseller"}>
              <Button as={Button} className="btn">
                BEST SELLERS
              </Button>
            </Link>
            <Link to={"/jwellery/Bangle"}>
              <Button as={Button} className="btn">
                BANGLE
              </Button>
            </Link>
            <Link to={"/jwellery/Ring"}>
              <Button as={Button} className="btn" onClick={handleRing}>
                RINGS
              </Button>
            </Link>

            <Link to={"/jwellery/Bracelet"}>
              <Button as={Button} className="btn" onClick={handleBrac}>
                BRACELETS
              </Button>
            </Link>
            <Link to={`/jwellery/Earrings`}>
              <Button as={Button} className="btn">
                EARRINGS
              </Button>
            </Link>
            <Link to={"/jwellery/Chain"}>
              <Button className="btn">CHAINS</Button>
            </Link>
            <Link to={"/jwellery/Kada"}>
              <Button className="btn">KADA</Button>
            </Link>
            <Menu>
              <MenuButton as={Button} className="btn">
                OTHER JEWELLERY
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={"/jwellery/Haram"}>
                    <Button>HARAM</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Jewellery Set"}>
                    <Button>JEWELLERY SET</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Maang Tikka"}>
                    <Button>MAANG TIKKA</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Mangalsutra"}>
                    <Button>MANGALSUTRAS</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Necklace"}>
                    <Button>NECKLACES</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/jwellery/Pendant"}>
                    <Button>PENDENT</Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        </Box>
        <Box
          pt={"1%"}
          pl={"1%"}
          fontSize={"17px"}
          textTransform={"capitalize"}
          fontWeight={"700"}
          boxShadow={"xl"}
        >
          {searchData.map((el) => {
            return (
              <Text pb={"0.6%"} onClick={() => handlePara(el._id)}>
                <SearchIcon pr={"0.4%"} />
                {el.link}
              </Text>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
