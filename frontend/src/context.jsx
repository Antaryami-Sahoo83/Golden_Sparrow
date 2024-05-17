import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [arr, setArr] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/ourproducts/allproducts`,
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setIsLoading(false);
        setArr(data);
        console.log(data);
      } else {
        const err = await res.json();
        throw new Error(err);
      }
    } catch (error) {
      console.log("Error!!!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppContext.Provider value={arr}>{children}</AppContext.Provider>;
};

export default AppProvider;
export { AppContext };
