import ProductCart from "./components/ProductCart";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";

const App = () => {
  return (
    <>
      <ProductCart>
        <ProductsSection />
        <CartSection />
      </ProductCart>
    </>
  );
};

export default App;
