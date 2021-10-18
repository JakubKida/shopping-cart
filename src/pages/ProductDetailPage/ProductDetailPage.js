import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

const ProductDetailsPage = ({ match, addToCart }) => {
  const [item, setItem] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchItem();
  });

  // get a specific item from FakeStore API
  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const newItemData = await data.json();
    setItem(newItemData);
    setIsLoaded(true);
  };

  const onAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="product-detail-page">
      {isLoaded ? (
        Object.keys(item).length !== 0 &&
        item.constructor === Object && (
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
        )
      ) : (
        <Spinner></Spinner>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
