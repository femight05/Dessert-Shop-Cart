const CartSection = ({ cartItem }) => {
  let isTrue = cartItem.length !== 0;
  return (
    <div className="bg-white p-6 space-y-2 md:w-80 rounded-xl self-start">
      <h1 className="text-xl md:text-3xl font-bold px-3 text-orange-700">
        {" "}
        Your Cart (<span>{cartItem.length}</span>){" "}
      </h1>
      {isTrue ? (
        cartItem.map((cart) => (
          <div key={cart.id} className="p-1 mt-5 space-y-1 px-3">
            <p className="font-semibold text-sm">{cart.name}</p>
            <small className="mb-2">ID: {cart.id}</small>
            <hr className="text-gray-200 mt-2" />
          </div>
        ))
      ) : (
        <div className="p-12">
          <img
            src="/images/empty-cart.svg"
            alt="empty-cart"
            className="text-center"
          />
          <p className="text-center text-olive-600">
            {" "}
            Your Items will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default CartSection;
