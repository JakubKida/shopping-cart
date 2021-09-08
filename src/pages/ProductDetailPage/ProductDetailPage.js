import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";

const ProductDetailsPage = ({ match, addToCart }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  });

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const newItemData = await data.json();
    console.log("fechin item");
    setItem(newItemData);
  };

  const onAddToCart = () => {
    addToCart(item);
  };

  console.log(item);
  // debugger;
  return (
    <div className="product-detail-page">
      {Object.keys(item).length !== 0 && item.constructor === Object && (
        <div className="product-card">
          <div className="product-image">
            <img src={item.image} alt={item.image}></img>
          </div>
          <div className="product-details">
            <div className="product-details-title">{item.title}</div>
            <div className="product-details-category">
              <span>Category: </span>
              {item.category}
            </div>
            <div className="product-details-rating">
              <span>Rating: </span>
              {item.rating.rate} ({item.rating.count} votes)
            </div>
            <div className="product-details-description">
              <span>
                Description: <br></br>
              </span>
              {item.description}
            </div>
            <div className="product-details-price">
              {item.price}$
              <div className="add-to-cart" onClick={onAddToCart}>
                Add to cart
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default ProductDetailsPage;
