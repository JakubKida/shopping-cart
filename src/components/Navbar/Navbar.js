import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePathname from "../../utils/customHooks/usePathname";

const NavBar = (props) => {
  const currentPath = usePathname();

  const itemsQuantity = props.uniqueItemsQuantity;

  const [tabToHightlight, setTabToHighlight] = useState("/");

  //switch highlighted button on path change
  useEffect(() => {
    switch (currentPath) {
      case "/":
        setTabToHighlight("home");
        break;
      case "/products":
        setTabToHighlight("products");
        break;
      case "/cart":
        setTabToHighlight("cart");
        break;
      case "/contact":
        setTabToHighlight("contact");
        break;
      default:
        setTabToHighlight("/");
        break;
    }
  }, [currentPath]);

  return (
    <div className="navbar">
      <Link to="/">
        <h1>FakeStore</h1>
      </Link>
      <ul className="page-switch-buttons">
        <Link to="/">
          <li className={`home ${tabToHightlight === "home" ? "highlight" : ""}`}>
            Home
          </li>
        </Link>
        <Link to="/products">
          <li className={`products ${tabToHightlight === "products" ? "highlight" : ""}`}>
            Products
          </li>
        </Link>
        <Link to="/contact">
          <li className={`contact ${tabToHightlight === "contact" ? "highlight" : ""}`}>
            Contact
          </li>
        </Link>
        <Link to="/cart">
          <li className={`cart ${tabToHightlight === "cart" ? "highlight" : ""}`}>
            <div
              className={`shopping-qiantity-indicator ${
                itemsQuantity === 0 ? "hidden" : ""
              }`}
            >
              {itemsQuantity}
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
