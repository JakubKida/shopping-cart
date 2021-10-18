import { Link } from "react-router-dom";

const Product = (props) => {
  const { title, price, image } = props.product;

  const addItemToCart = (e) => {
    e.preventDefault();
    props.addToCart(props.product);
  };

  return (
    <div className="product-cell">
      <Link className="img-link" to={`products/${props.product.id}`}>
        <img className="product-image" src={image} alt={title}></img>
      </Link>
      <div className="product-name">{title}</div>
      <div className="product-price">{price}$</div>
      <div className="add-details-buttons">
        <div className="add-to-cart" onClick={addItemToCart}>
          Add to cart
        </div>
        <Link to={`products/${props.product.id}`}>
          <div className="see-details">See details</div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
