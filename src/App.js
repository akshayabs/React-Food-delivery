import { useState } from "react";
import "./App.css";
import Heading from "./components/Layout/Heading";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./Login/Login";

import ContactForm from "./Contact/ContactForm";


function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    
    
    <CartProvider>
    <Login/><br/><br/><br/>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Heading onShowCart={showCartHandler} onClose={hideCartHandler} />
      
      
      <main>
      
        <Meals />
        <ContactForm/>
      </main>
    </CartProvider>
    

  );
}

export default App;