import { useState } from "react";
import ProductCart from "./components/ProductCart";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";

const App = () => {
  const [cart, setCart] = useState([]);

  function handleAddtoCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <ProductCart>
        <ProductsSection onAddtoCart={handleAddtoCart} />
        <CartSection cartItem={cart} />
      </ProductCart>
    </div>
  );
};

export default App;
