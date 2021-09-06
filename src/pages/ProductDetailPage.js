import { useState, useEffect } from "react";

const ProductDetailsPage = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const newItemData = await data.json();
    setItem(newItemData);
  };
console.log(item);
  return (
    <div>
      <h1>This is a Product detail page</h1>
      <img src={item.image} alt={item.image}></img>
      <div className="product-details">
          <div className="product-detail-title">{item.title}</div>
          <div className="product-detail-price">{item.price} zł</div>
          <div className="product-detail-description">{item.description}</div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
