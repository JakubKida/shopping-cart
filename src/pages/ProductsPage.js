import ProductsGrid from "../components/ProductsGrid";
import { useEffect, useState } from "react";

const ProductsPage = (props) => {

    const [items,setItem] = useState([]);

  useEffect(() => {
      fetchProducts();
  }, [])

  const fetchProducts = async ()=>{
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json();
      setItem(products);
    //   console.log(products);
  }

  return (
    <div className="products-page">
      <h1>This is a Products page.</h1>
      <ProductsGrid addToCart={props.addToCart} products={items}/>
    </div>
  );
};

export default ProductsPage;
