import Footer from "../../components/Footer/Footer";

const CartPage = (props) => {
  const removeOneItem = (event) => {
    props.removeFromCart(event.target.dataset.index);
  };

  const changeOneItem = (event) => {
    props.changeItemAmount(event.target.dataset.index, event.target.value);
  };

  return (
    <div className="cart-page">
      {props.shoppingCart.length > 0 ? (
        <div className="card-table-wrapper">
          <h1>Your Cart</h1>
          <table>
            <tr>
              <th className="hide-on-mobile"></th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
            {props.shoppingCart.map((cartItem) => (
              <tr>
                <td className="image">
                  <img src={cartItem.item.image} alt={cartItem.item.image}></img>
                </td>
                <td className="name">{cartItem.item.title}</td>
                <td className="change-amount">
                  <input
                    data-index={cartItem.item.id}
                    type="number"
                    min="1"
                    value={cartItem.quantity}
                    onChange={changeOneItem}
                  ></input>
                </td>
                <td className="price">{cartItem.item.price}$</td>
                <td className="remove">
                  <button data-index={cartItem.item.id} onClick={removeOneItem}></button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="empty"></td>
              <td className="empty hide-on-mobile"></td>
              <th className="total-label">Total:</th>
              <td className="price total-price">
                {props.shoppingCart
                  .reduce(
                    (accumulator, cartItem) =>
                      cartItem.item.price * cartItem.quantity + accumulator,
                    0
                  )
                  .toFixed(2)}
                $
              </td>
            </tr>
          </table>
          <button className="proceed-checkout">Proceed to checkout</button>
        </div>
      ) : (
        <div className="card-table-wrapper">
          <h1>Your Cart</h1>
          <div className="empty-cart-message">Your cart is empty.</div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;
