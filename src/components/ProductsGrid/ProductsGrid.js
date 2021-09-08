import Product from "../Product/Product";

const ProductsGrid = (props) => {
  return (
    <div className="products-grid">
      {props.products
        .filter((product) => props.checkedCategories.includes(product.category))
        .map((product) => (
          <Product key={product.id} addToCart={props.addToCart} product={product} />
        ))}
    </div>
  );
};

export default ProductsGrid;
