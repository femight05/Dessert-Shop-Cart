const CartSection = () => {
  return (
    <div className="bg-white p-6 space-y-5 rounded-xl self-start">
      <h1 className="text-2xl font-bold text-orange-700">
        {" "}
        Your Cart (<span>0</span>){" "}
      </h1>
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
    </div>
  );
};

export default CartSection;
