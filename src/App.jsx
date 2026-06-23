import { useState } from "react";
import ProductCart from "./components/ProductCart";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";
import OrderConfirm from "./components/OrderConfirm";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showOrderConfirm, setShowOrderConfirm] = useState(false);

  function handleAddtoCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveItems(id) {
    setCart(cart.filter((a) => a.id !== id));
  }

  function handleConfrimOrder() {
    setShowOrderConfirm(!showOrderConfirm);
  }

  return (
    <div>
      <ProductCart>
        <ProductsSection onAddtoCart={handleAddtoCart} />
        <CartSection
          cartItem={cart}
          handleRemove={handleRemoveItems}
          handleConfirm={handleConfrimOrder}
        />
      </ProductCart>
      {showOrderConfirm && <OrderConfirm cartItem={cart} />}
    </div>
  );
};

export default App;
