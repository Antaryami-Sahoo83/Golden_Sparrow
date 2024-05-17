import "./App.css";
import AllRoutes from "./AllRoute";
import Details from "./pages/details/Details";
import Invoice from "./pages/invoice/Invoice";
import SignUp from "./pages/signup/Signup";
import AddToCart from "./pages/addToCart/addCart";
import PCart from "./components/cart/cart";
import Cart from "./components/cart/cart";
import Chatbot from "./components/chatbot/chatbot";

function App() {
  return (
    <>
      <AllRoutes />
      {/* <Chatbot /> */}
    </>
  );
}

export default App;
