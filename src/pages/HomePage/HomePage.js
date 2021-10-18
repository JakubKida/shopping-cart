import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="main-page-outer">
      <div className="main-page">
        <div className="description">
          <h1>Shopping, redefined</h1>
          <p>
            We offer highest quality products at low prices with international shipping.
            Our customers enjoyment has always been our highest priority. Ready to find
            out how real online shopping feels?
          </p>

          <Link to="/products">
            <button className="goto-shop-button">Start shopping</button>
          </Link>
        </div>
        <img
          src="assets/shopping.jpg"
          alt="shopping"
          onLoad={(e) => {
            e.target.className = "loaded";
          }}
        ></img>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
