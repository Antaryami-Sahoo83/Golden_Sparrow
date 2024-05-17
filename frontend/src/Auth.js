import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ children }) {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token")) || null;
  useEffect(() => {
    if (token === null) {
      navigate("/signin");
    }
  }, []);

  return children;
}

export default Auth;
