import { Link } from "react-router-dom";

const Product = (props) => {
  const { title, price, image } = props.product;

  const addItemToCart = (e) => {
    e.preventDefault();
    props.addToCart(props.product);
  };

  return (
    <Link to={`products/${props.product.id}`}>
      <div className="product-cell">
        <div className="product-name">{title}</div>
        <img className="product-image" src={image} alt={title}></img>
        <div className="product-price">{price} zł</div>
        <div className="add-to-cart" onClick={addItemToCart}>
          Add to cart
        </div>
      </div>
    </Link>
  );
};

export default Product;
