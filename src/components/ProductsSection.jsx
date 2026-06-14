import ProductListings from "./ProductListings";
import Data from "../data.json";
const ProductsSection = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold mx-1 my-2">Desserts</h1>
      <div>
        <ProductListings products={Data} />
      </div>
    </div>
  );
};

export default ProductsSection;
