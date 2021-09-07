import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import "./style.scss";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) => {
    const index = shoppingCart.findIndex((cartItem) => cartItem.item.id === item.id);
    if (index !== -1) {
      shoppingCart[index].quantity++;
    } else {
      shoppingCart.push({ item: item, quantity: 1 });
    }
    setShoppingCart([...shoppingCart]);
  };

  const removeItemFromCart = (index) => {
    const indexToDelete = shoppingCart.findIndex(
      (cartItem) => cartItem.item.id === parseInt(index)
    );
    console.log("Deleting");
    if (indexToDelete !== -1) {
      shoppingCart.splice(indexToDelete, 1);
      setShoppingCart([...shoppingCart]);
    }
  };

  const changeItemAmount = (index, newQuantity) => {
    const indexToChange = shoppingCart.findIndex(
      (cartItem) => cartItem.item.id === parseInt(index)
    );

    if (indexToChange !== -1) {
      shoppingCart[indexToChange].quantity = newQuantity;
      setShoppingCart([...shoppingCart]);
    }
  };
  console.log(shoppingCart.length);
  return (
    <div>
      <Router>
      <NavBar uniqueItemsQuantity={shoppingCart.length} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/products"
            render={(props) => <ProductsPage addToCart={addItemToCart} />}
          ></Route>
          <Route
            exact
            path="/products/:id"
            render={(props) => (
              <ProductDetailsPage {...props} addToCart={addItemToCart} />
            )}
          ></Route>
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartPage
                shoppingCart={shoppingCart}
                addToCart={addItemToCart}
                removeFromCart={removeItemFromCart}
                changeItemAmount={changeItemAmount}
              />
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
