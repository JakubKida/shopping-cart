import ProductsGrid from "../components/ProductsGrid";
import { useEffect, useState } from "react";

const ProductsPage = (props) => {
  const [items, setItem] = useState([]);

  const [checkedIndexes, setCheckedIndexes] = useState([]);

  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setItem(products);
    //   console.log(products);
  };

  const handleCheckboxChange = (e) => {
    checkedIndexes[e.target.dataset.index] = !checkedIndexes[e.target.dataset.index];

    if (checkedIndexes[e.target.dataset.index] === true) {
      filteredCategories.push(e.target.dataset.name);
      setFilteredCategories([...filteredCategories]);
    } else {
      setFilteredCategories(
        filteredCategories.filter((category) => category !== e.target.dataset.name)
      );
    }
    console.log(filteredCategories);
    setCheckedIndexes(...[checkedIndexes]);
  };

  return (
    <div className="products-page">
      <h1>This is a Products page.</h1>
      <input
        data-index="0"
        data-name="electronics"
        id="electronics"
        type="checkbox"
        onChange={handleCheckboxChange}
        isSelected={checkedIndexes[0]}
      ></input>
      <label htmlFor="electronics">electronics</label>
      <input
        data-index="1"
        data-name="jewelery"
        id="jewelery"
        type="checkbox"
        onChange={handleCheckboxChange}
        isSelected={checkedIndexes[1]}
      ></input>
      <label htmlFor="jewelery">jewelery</label>
      <input
        data-index="2"
        data-name="men's clothing"
        id="men-cloth"
        type="checkbox"
        onChange={handleCheckboxChange}
        isSelected={checkedIndexes[2]}
      ></input>
      <label htmlFor="men-cloth">men's clothing</label>
      <input
        data-index="3"
        data-name="women's clothing"
        id="women-cloth"
        type="checkbox"
        onChange={handleCheckboxChange}
        isSelected={checkedIndexes[3]}
      ></input>
      <label htmlFor="women-cloth">women's clothing</label>
      <ProductsGrid
        addToCart={props.addToCart}
        products={items}
        checkedCategories={filteredCategories}
      />
    </div>
  );
};

export default ProductsPage;
