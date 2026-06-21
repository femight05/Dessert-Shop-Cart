import { useState } from "react";

const ProductListings = ({ products, onAddtoCart }) => {
  const [activeProductId, setActiveProductId] = useState(null);
  const [addQuantity, setAddQuantity] = useState(1);

  const handleAddToCartClick = (product) => {
    onAddtoCart({ ...product, quantity: addQuantity });
    setActiveProductId(product.id ?? product.name);
    setAddQuantity(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
      {products.map((product) => {
        const pid = product.id ?? product.name;
        return (
          <div key={pid} className="relative">
            <img
              src={product.image.desktop}
              alt={product.name}
              className="w-60 h-52 -z-50 rounded-md"
            />
            {activeProductId === pid ? (
              <div className="border w-2/3 bg-orange-700 text-white text-center absolute cursor-pointer flex justify-center flex-0 gap-5 items-center tracking-wide left-8 font-semibold bottom-25 text-sm z-50 border-gray-500 rounded-3xl px-3 py-2 hover:border-orange-700">
                <img
                  onClick={() => setAddQuantity((q) => q + 1)}
                  src="/images/icon-increment-quantity.svg"
                  alt="increase"
                  className="w-3 h-3 bg-orange-700 text-black hover:bg-orange-700 cursor-pointer"
                />
                <span className="px-2">{addQuantity}</span>
                <img
                  onClick={() => setAddQuantity((q) => Math.max(1, q - 1))}
                  src="/images/icon-decrement-quantity.svg"
                  alt="decrease"
                  className="w-3 h-3 bg-orange-700 text-black hover:bg-orange-700 cursor-pointer"
                />
              </div>
            ) : (
              <button
                onClick={() => handleAddToCartClick(product)}
                className="border w-2/3 text-center absolute cursor-pointer flex justify-center flex-0 gap-2 items-center tracking-wide left-8 font-semibold bottom-25 text-sm z-50 bg-white border-gray-500 rounded-3xl px-3 py-2 hover:border-orange-700 hover:text-orange-700"
              >
                <img
                  src="/images/icon-add-to-cart.svg"
                  alt="add to cart"
                  className="w-6 h-6"
                />
                Add to Cart
              </button>
            )}
            <div className="pt-10 space-y-0.5">
              <p className="text-gray-400">{product.category}</p>
              <h1 className="font-semibold">{product.name}</h1>
              <p className="text-red-600">${product.price}.00</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListings;
