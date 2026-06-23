const OrderConfirm = ({ cartItem }) => {
  let totalNum = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-99 flex flex-col bg-black/50 justify-center  items-center">
      <div className=" bg-white p-5 rounded-md space-y-1 w-2/7">
        <img
          src="images/icon-order-confirmed.svg"
          alt="order-confirm"
          className="mb-4"
        />
        <h1 className="font-bold text-3xl">Order Confirmed</h1>
        <p className="text-xs text-gray-500">We hope you enjoy your food!</p>
        {cartItem.map((cart) => (
          <div
            key={cart.id}
            className="p-3 flex items-center justify-between mt-5 gap-2  space-y-1 bg-gray-50 rounded-md px-4"
          >
            <div className="flex justify-center items-center gap-3">
              <div>
                <img
                  src={cart.image.thumbnail}
                  alt="thumbnail image"
                  className="w-10 h-10 rounded-md"
                />
              </div>
              <div>
                <p className="font-semibold text-sm">{cart.name}</p>
                <div className="mt-1 flex items-center gap-3">
                  <p className="text-xs text-orange-500">{cart.quantity}x</p>
                  <p className="text-xs text-gray-400">@{cart.price}.00</p>
                </div>
              </div>
            </div>
            <p className="  text-black justify-end">
              ${cart.price * cart.quantity}.00
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center py-5">
          <h1 className="font-bold mt-2 text-gray-700 tracking-wide">
            Order Total :
          </h1>
          <p className="font-bold text-3xl">${totalNum}.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
