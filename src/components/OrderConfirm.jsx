const OrderConfirm = ({ cartItem, handleNewOrder }) => {
  let totalNum = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-10 rounded-md space-y-4 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-4">
          <img
            src="images/icon-order-confirmed.svg"
            alt="order-confirm"
            className="mb-4"
          />
          <div>
            <h1 className="font-bold text-3xl">Order Confirmed</h1>
            <p className="text-xs text-gray-500">
              We hope you enjoy your food!
            </p>
          </div>
        </div>

        <div className="space-y-4 overflow-y-auto max-h-[55vh] pr-2">
          {cartItem.map((cart) => (
            <div
              key={cart.id}
              className="p-3 flex items-center justify-between gap-2 bg-gray-50 rounded-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={cart.image.thumbnail}
                  alt="thumbnail image"
                  className="w-10 h-10 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">{cart.name}</p>
                  <div className="mt-1 flex items-center gap-3">
                    <p className="text-xs text-orange-500">{cart.quantity}x</p>
                    <p className="text-xs text-gray-400">@{cart.price}.00</p>
                  </div>
                </div>
              </div>
              <p className="text-black">${cart.price * cart.quantity}.00</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center py-5 border-t border-gray-200">
            <h1 className="font-bold text-gray-700 tracking-wide">
              Order Total :
            </h1>
            <p className="font-bold text-3xl">${totalNum}.00</p>
          </div>
          <button
            onClick={handleNewOrder}
            className="text-white text-center text-xs md:text-sm bg-orange-700 rounded-2xl px-20 w-full cursor-pointer hover:bg-orange-900 py-2"
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;
