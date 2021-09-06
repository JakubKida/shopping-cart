import Product from "./Product";

const ProductsGrid = (props) => {
    console.log(props.products);
  return (
    <div className="products-grid">
      {props.products.map((product) => (
        <Product key={product.id} addToCart={props.addToCart} product={product}/>
      ))}
    </div>
  );
};

export default ProductsGrid;
