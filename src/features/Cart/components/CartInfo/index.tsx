
export default function CartInfo() {
  const listProducts = [
    {
      nameProduct: 'Printed T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Slub jersey T-shirt',
      price: 18.7,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
    },
    {
      nameProduct: 'T-shirt with a motif',
      price: 16.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Art T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Printed T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Slub jersey T-shirt',
      price: 18.7,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
    },
    {
      nameProduct: 'T-shirt with a motif',
      price: 16.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      nameProduct: 'Art T-shirt',
      price: 12.55,
      Category: 'T-Shirt',
      image:
        'https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
  ];
  return (
    <>
      <div className="flex justify-between border-b p-4">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{listProducts.length} Items</h2>
      </div>
      <div className="flex  p-4">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
      </div>
      <div className="h-96 overflow-y-auto overflow-x-hidden px-10">
        {listProducts.map((product) => (
          <div className="flex items-center hover:bg-gray-100 -mx-8 my-5 shadow-lg rounded-lg ">
            <div className="flex w-2/5 py-4">
              <div className="w-32 ">
                <img className="h-40 w-full shadow-lg rounded-lg  " src={product.image} alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{product.nameProduct}</span>
                <span className="text-red-500 text-xs">{product.Category}</span>
                <a href="/cart" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div className="flex justify-center w-1/5 select-none cursor-pointer">
              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input className="mx-2 border text-center w-8" type="text" value="1" />

              <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          </div>
        ))}
      </div>
    </>
  );
}
