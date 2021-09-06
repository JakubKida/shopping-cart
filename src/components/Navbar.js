import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h1>FakeStore</h1>
      <ul className="page-switch-buttons">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
