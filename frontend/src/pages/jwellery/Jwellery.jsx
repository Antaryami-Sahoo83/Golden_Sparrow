import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import PCard from "../../components/card/Card";
import "../jwellery/jwellery.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { AppContext } from "../../context";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useConst,
} from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Box,
  Spacer,
  Divider,
  Input,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Jwellery = () => {
  const data = useContext(AppContext);
  const type = useParams();
  const [arr, setArr] = useState([]);
  const [showArr, setShowArr] = useState([]);
  const pageButtons = [];
  const [page, setPage] = useState(1);
  const [pageArr, setPageArr] = useState([]);
  const [imageSource, setImageSource] = useState("");
  const [showAllData, setShowAllData] = useState(true);
  const [str, setStr] = useState("");

  const imageSrc = {
    Bestseller:
      "https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/Desktop_1920-x560_toplisting.jpg",
    Ring: "https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg",
    Earrings:
      "https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Earring/01/Desktop_1920x560_toplisting.jpg",
    Bracelet:
      "https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp",
    Bangle:
      "https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp",
    Chain:
      "https://banner.caratlane.com/live-images/bcaa3ded25f041ef9807412943d6a4ad.webp",
    Kada: "https://banner.caratlane.com/live-images/792a0ee4b89d4f1f82518d5ae7af44b8.webp",
    Necklace:
      "https://banner.caratlane.com/live-images/57df889715444466ae111a10de4e8e4b.webp",
    Pendant:
      "https://banner.caratlane.com/live-images/40d09efd1fc94e73b56dcb5cd3ae7077.webp",
    Mangalsutra:
      "https://banner.caratlane.com/live-images/ed19e9fc6ddd4de592b67776543499c1.jpg",
    Haram:
      "https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp",
    "Jewellery Set":
      "https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp",
    "Maang Tikka":
      "https://assets.cltstatic.com/images/responsive/DefaultBanner_Desktop.webp",
  };

  const sortByCatagory = ["All Products", "Men", "Women", "Kids", "Unisex"];

  const getData = () => {
    console.log(data);
    const odata = data.filter((el) => {
      return el.product == type.type;
    });
    console.log(odata);
    setArr(odata);
    setShowArr(odata);
    const start = (page - 1) * 6;
    const end = page * 6;
    const newData = odata.slice(start, end);
    setPageArr(newData);
  };

  const handlePage = (page) => {
    const start = (page - 1) * 6;
    const end = page * 6;
    console.log(showArr);
    const newData = showArr.slice(start, end);
    setPageArr(newData);
  };

  const getImage = () => {
    const val = type.type;
    console.log(val);
    setImageSource(imageSrc[val]);
  };

  let pageNum = Math.ceil(showArr.length / 6);
  console.log(pageNum);
  for (let i = 1; i <= pageNum; i++) {
    pageButtons.push(i);
  }

  const handleSort = (val) => {
    if (val === "asc") {
      const lth = showArr.sort((a, b) => a.value - b.value);
      setShowArr(lth);
      handlePage(page);
    } else if (val === "desc") {
      const rth = showArr.sort((a, b) => b.value - a.value);
      console.log(rth);
      setShowArr(rth);
      handlePage(page);
    }
  };

  const handleSortByCatagory = (str) => {
    setStr(str);
    if (str === "All Products") {
      setShowArr(arr);
      console.log(showArr);
    } else {
      const cataData = arr.filter((el) => el.category === str);
      setShowArr(cataData);
    }
  };

  useEffect(() => {
    getData();
    handlePage(page);
  }, []);

  useEffect(() => {
    getData();
    handlePage(page);
    handleSortByCatagory(str);
  }, [str]);

  useEffect(() => {
    getData();
    getImage();
  }, [type]);

  return (
    <>
      <Navbar />

      <Image src={imageSource}></Image>

      <Grid
        templateColumns={{ base: "100% 0%", md: "100% 0%", lg: "25% 75%" }}
        gap={2}>
        <GridItem
          mt={"2%"}
          ml={"3%"}
          display={{ base: "none", md: "none", lg: "grid" }}>
          <Box mt={"10%"} mb={"15%"}>
            <Box mt={"20%"} bg={"#b577d1"} borderRadius={"0.3rem"} mb={"15%"}>
              <Text textAlign={"center"} fontSize={"30px"} fontWeight={"800"}>
                Filter By
              </Text>
            </Box>
            <Box>
              <Text
                textAlign={"center"}
                fontSize={"20px"}
                fontWeight={"800"}
                mb={"5%"}>
                <hr />
                Sort by Catagory
              </Text>
              <hr />
              <Box>
                <ButtonGroup
                  display={"flex"}
                  flexDirection={"column"}
                  variant={"unstyled"}
                  fontWeight={"sm"}>
                  <Spacer />
                  {sortByCatagory.map((el) => {
                    return (
                      <Button
                        className="catagory_btn"
                        onClick={() => handleSortByCatagory(el)}>
                        {el}
                      </Button>
                    );
                  })}
                </ButtonGroup>
                <hr />
              </Box>
            </Box>

            <Box>
              <Text
                textAlign={"center"}
                fontSize={"20px"}
                fontWeight={"800"}
                mb={"5%"}>
                Sort by Price
              </Text>
              <hr />
              <Spacer />
              <Box
                display={"flex"}
                justifyContent={"center"}
                mt={"5%"}
                mb={"5%"}>
                <Menu closeOnSelect={true}>
                  <MenuButton
                    as={Button}
                    bg={"#b577d1"}
                    rightIcon={<ChevronDownIcon />}
                    w={"80%"}>
                    Sort By Price
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      defaultValue="asc"
                      title="Sort by"
                      type="radio">
                      <MenuItemOption
                        value="asc"
                        as={"button"}
                        onClick={() => handleSort("asc")}>
                        Low to High
                      </MenuItemOption>
                      <MenuItemOption
                        value="desc"
                        as={"button"}
                        onClick={() => handleSort("desc")}>
                        High to Low
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Text
            mt={"2%"}
            ml={"2%"}
            fontSize={{ base: "1rem", ms: "1.2", lg: "1.3" }}
            display={"flex"}
            gap={1}>
            GOLDENSPARROW <b> {type.type}s </b>{" "}
            <span>
              {showArr.length}
              {"  "}
            </span>
            Designs
          </Text>
          {console.log(pageArr)}
          <div className="card_div">
            {showArr.length > 0 &&
              pageArr.map((el) => {
                return (
                  <PCard
                    image={el.image}
                    link={el.link}
                    value={el.value}
                    product={el.product}
                    id={el._id}
                  />
                );
              })}
          </div>
          {showArr.length === 0 && (
            <Box mt={"5%"} ml={"10%"}>
              <Image
                src="https://media1.giphy.com/media/JPJ2NlxNWrOkqHEiWk/giphy.gif?cid=ecf05e47hon9r4d8qvownhkkzist8lcj5xomnuaj0ndi3oal&ep=v1_gifs_related&rid=giphy.gif&ct=s"
                ml={{ lg: "15%" }}></Image>
              <Text fontSize={"30px"} fontWeight={"500"}>
                Sorry !!! We currently have no Products under this Catagory (:
              </Text>
            </Box>
          )}
        </GridItem>
      </Grid>
      <ButtonGroup
        variant="outline"
        p={"0.2%"}
        display={"flex"}
        justifyContent={"center"}
        mb={"1%"}
        flexWrap={"wrap"}>
        {showAllData === true &&
          pageButtons.map((el) => {
            return (
              <Button colorScheme="purple" onClick={() => handlePage(el)}>
                {el}
              </Button>
            );
          })}
      </ButtonGroup>

      <Box
        display={{ base: "flex", md: "flex", lg: "none" }}
        justifyContent={"center"}
        position={"fixed"}
        bottom={0}
        width={"100vw"}
        bg={"#eddff0"}
        gap={10}
        color={"black"}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant={"unstyled"}>
            Sort By Catagory
          </MenuButton>
          <MenuList>
            {sortByCatagory.map((el) => {
              return (
                <MenuItem
                  as={"button"}
                  className="catagory_btn"
                  onClick={() => handleSortByCatagory(el)}>
                  {el}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant={"unstyled"}>
            Sort By Price
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem
              value="asc"
              as={"button"}
              onClick={() => handleSort("asc")}>
              Low to High
            </MenuItem>
            <MenuItem
              value="desc"
              as={"button"}
              onClick={() => handleSort("desc")}>
              High to Low
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Footer />
    </>
  );
};
export default Jwellery;
