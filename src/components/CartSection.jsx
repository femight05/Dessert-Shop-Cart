const CartSection = ({ cartItem, handleRemove, handleConfirm }) => {
  let isTrue = cartItem.length !== 0;

  let totalNum = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="bg-white p-6 space-y-2 md:w-80 rounded-xl self-start">
      <h1 className="text-xl md:text-3xl font-bold px-3 text-orange-700">
        {" "}
        Your Cart (<span>{cartItem.length}</span>){" "}
      </h1>
      {isTrue ? (
        cartItem.map((cart) => (
          <div
            key={cart.id}
            className="p-1 flex items-center justify-between mt-5 space-y-1 px-3"
          >
            <div>
              <p className="font-semibold text-sm">{cart.name}</p>
              <div className="mt-1 flex items-center gap-3">
                <p className="text-xs text-orange-500">{cart.quantity}x</p>
                <p className="text-xs text-gray-400">@{cart.price}.00</p>
                <p className="text-xs text-gray-400">
                  @{cart.price * cart.quantity}.00
                </p>
              </div>
              <hr className="text-gray-200 mt-2 w-full" />
            </div>
            <div onClick={() => handleRemove(cart.id)}>
              <img
                src="/images/icon-remove-item.svg"
                alt="remove item icon"
                className="border rounded-full border-gray-300 cursor-pointer hover:border-orange-600  p-0.5"
              />
            </div>
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
      {isTrue && (
        <div className="flex justify-between items-center py-5">
          <h1 className="font-bold mt-2 text-gray-700 tracking-wide">
            Order Total :
          </h1>
          <p className="font-bold text-3xl">${totalNum}.00</p>
        </div>
      )}
      {isTrue && (
        <div className="flex flex-col justify-center items-center gap-5">
          {" "}
          <p className="flex py-3 bg-gray-100 px-4 text-xs gap-1 rounded-md">
            <img src="images/icon-carbon-neutral.svg" alt="confirm order" />{" "}
            This is a carbon-neutral delivery
          </p>{" "}
          <button
            onClick={handleConfirm}
            className="text-white bg-orange-700 rounded-2xl px-20 cursor-pointer hover:bg-orange-900 py-2"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSection;
