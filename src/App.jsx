import { useState } from "react";
import ProductCart from "./components/ProductCart";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";

const App = () => {
  const [cart, setCart] = useState([]);

  function handleAddtoCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveItems(id) {
    setCart(cart.filter((a) => a.id !== id));
  }

  return (
    <div>
      <ProductCart>
        <ProductsSection onAddtoCart={handleAddtoCart} />
        <CartSection cartItem={cart} handleRemove={handleRemoveItems} />
      </ProductCart>
    </div>
  );
};

export default App;
