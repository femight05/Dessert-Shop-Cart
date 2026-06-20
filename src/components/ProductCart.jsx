const ProductCart = ({ children }) => {
  return (
    <>
      <div className="flex p-10 bg-gray-50 gap-14 flex-col md:flex-row">
        {children}
      </div>
      ;
    </>
  );
};

export default ProductCart;
