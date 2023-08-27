import Cart from "@/components/views/shoppingCart/cart";

// for the timebeing, i'm using this productItems object as mock data
const productItems = [
  {
    name: "City - All Black",
    size: "COMPACT",
    src: "https://betty-theme.myshopify.com/cdn/shop/products/fablou_city_all_black_1512x.jpg?v=1601478195",
    price: 69.01,
    quantity: 1,
  },
  {
    name: "City - All Black",
    size: "COMPACT",
    src: "https://betty-theme.myshopify.com/cdn/shop/products/fablou_city_all_black_1512x.jpg?v=1601478195",
    price: 69.01,
    quantity: 2,
  },
];

const page = () => {
  return <div className="flex justify-center">
    <Cart cartItems={productItems} flashSalePercent={5} />
  </div>;
};

export default page;
