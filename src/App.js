import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import './styles/style.css'

const App = (props) => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/products" component={ProductsPage}></Route>
          <Route exact path="/cart" component={CartPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
