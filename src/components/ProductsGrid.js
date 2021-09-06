import Product from "./Product";

const ProductsGrid = (props) => {
  console.log(props);
  return (
    <div className="products-grid">
      {props.products
        .filter((product) => {
          console.log(product);
          console.log(props.checkedCategories)
          debugger;
          return props.checkedCategories.includes(product.category);
        })
        .map((product) => (
          <Product key={product.id} addToCart={props.addToCart} product={product} />
        ))}
    </div>
  );
};

export default ProductsGrid;
