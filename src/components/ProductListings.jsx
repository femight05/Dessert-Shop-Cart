const ProductListings = ({ products, onAddtoCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
      {products.map((product) => (
        <div className="relative">
          <img
            src={product.image.desktop}
            alt={product.name}
            className="w-60 h-52 -z-50 rounded-md"
          />
          <button
            onClick={() => {
              onAddtoCart(product);
            }}
            className="border w-2/3 text-center absolute cursor-pointer flex justify-center flex-0 gap-2 items-center tracking-wide left-8 font-semibold bottom-25 text-sm z-50 bg-white border-gray-500 rounded-3xl px-3 py-2 hover:border-orange-700 hover:text-orange-700"
          >
            <img src="/images/icon-add-to-cart.svg" />
            Add to Cart
          </button>
          <div className="pt-10 space-y-0.5">
            <p className="text-gray-400">{product.category}</p>
            <h1 className="font-semibold">{product.name}</h1>
            <p className="text-red-600">${product.price}.00</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListings;
