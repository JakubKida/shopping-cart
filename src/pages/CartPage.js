const CartPage = (props) => {
  const removeOneItem = (event) => {
    props.removeFromCart(event.target.dataset.index);
  };

  const changeOneItem = (event) => {
    props.changeItemAmount(event.target.dataset.index, event.target.value);
  };

  console.log("rerendering");
  return (
    <div>
      <h1>This is a Cart page</h1>
      <ul>
        {props.shoppingCart.map((cartItem) => (
          <li>
            {cartItem.item.title}: cena {cartItem.item.price}
            <button data-index={cartItem.item.id} onClick={removeOneItem}>
              Remove item
            </button>
            <input
              data-index={cartItem.item.id}
              type="number"
              min="1"
              value={cartItem.quantity}
              onChange={changeOneItem}
            ></input>
          </li>
        ))}
      </ul>

      {props.shoppingCart.length > 0 ? (
        <div>
          <div>
            Razem:
            {props.shoppingCart
              .reduce(
                (accumulator, cartItem) =>
                  cartItem.item.price * cartItem.quantity + accumulator,
                0
              )
              .toFixed(2)}
          </div>
          <button>Proceed to checkout</button>
        </div>
      ) : (
        <div>The cart is Empty</div>
      )}
    </div>
  );
};

export default CartPage;
