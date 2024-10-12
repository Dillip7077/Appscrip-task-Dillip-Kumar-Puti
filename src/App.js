import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronRight, FaChevronLeft, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import IdealFor from "./components/lebel.js";
import Heart from './components/Heart';
import img1 from './assets/insta.svg';
import img2 from './assets/linkedin.svg';
import img3 from './assets/gpay.png';
import img4 from './assets/pay2.png';
import img5 from './assets/paypl.png';
import img6 from './assets/pay4.png';
import img7 from './assets/pay5.png';
import img8 from './assets/pay6.png';
import usd from './assets/usd.png'

function App() {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleToggle1 = () => {
    setIsExpanded1((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsExpanded2((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productsWithTags = response.data.map((product) => ({
        ...product,
        isNew: Math.random() < 0.1,
        isOutOfStock: Math.random() < 0.05,
      }));
      setProducts(productsWithTags);
    };
    fetchData();
  }, []);

  const filterProducts = (products) => {
    switch (selectedFilter) {
      case "newest":
        return products.filter((product) => product.isNew);
      case "price_high_to_low":
        return [...products].sort((a, b) => b.price - a.price);
      case "price_low_to_high":
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts(products);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="App">
      <Navbar />
      <h1 id="h1">DISCOVER OUR PRODUCTS</h1>
      <p id="p">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <br />

      <div className="summary-container">
        <div className="summary-left">
          <strong>{products.length} ITEMS</strong>
          <button
            onClick={toggleFilters}
            style={{ display: "flex", alignItems: "center" }}
          >
            {showFilters ? (
              <>
                <FaChevronLeft className="icon2" style={{ marginRight: "5px" }} />
                HIDE FILTER
              </>
            ) : (
              <>
                <FaChevronRight className="icon2" style={{ marginRight: "5px" }} />
                SHOW FILTER
              </>
            )}
          </button>
        </div>
        <div className="summary-right">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price_high_to_low">PRICE: HIGH TO LOW</option>
            <option value="price_low_to_high">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className="container">
        {showFilters && (
          <div className="filters">
            <IdealFor />
          </div>
        )}

        <div className={`product-list ${showFilters ? "" : "full-width"}`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product ${product.isOutOfStock ? "out-of-stock" : ""}`}
            >
              <div className="overlay">
                {product.isNew && <span className="tag new">NEW PRODUCT</span>}
                {product.isOutOfStock && (
                  <span className="tag out-of-stock">OUT OF STOCK</span>
                )}
              </div>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <div className="price-container">
                  <p>Price: ${product.price}</p>
                  <Heart />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="left">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettä muse.</p>
            <br />
            <br />
            <div className="subscribe">
              <input type="email" placeholder="Enter your e-mail" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="right">
            <div className="contact">
              <h3>CONTACT US</h3>
              <span>+44 221 133 5360</span>
              &nbsp;
              <span>customercare@mettamuse.com</span>
              <h3>CURRENCY</h3>
            </div>
            <p><img src={usd} alt="img" /> &nbsp; <span className="point">.</span> &nbsp;  USD</p>
            <p>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
        <hr />

        <div className="footer-extensions">
          <div className="left1">
            <h3 onClick={handleToggle} style={{ cursor: 'pointer' }}>
              mettä muse
              {isExpanded ? (
                <FaChevronUp className="icons" style={{ marginLeft: '10px' }} />
              ) : (
                <FaChevronDown className="icons" style={{ marginLeft: '10px' }} />
              )}
            </h3>
            <div className={`toggle-content ${isExpanded ? "show" : ""}`}>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
              <p>Contact Us</p>
              <p>EU Compliance Docs</p>
            </div>
          </div>
          <hr className="hr" />

          <div className="middle1">
            <h3 onClick={handleToggle1} style={{ cursor: 'pointer' }}>
              QUICK LINKS
              {isExpanded1 ? (
                <FaChevronUp className="icons" style={{ marginLeft: '10px' }} />
              ) : (
                <FaChevronDown className="icons" style={{ marginLeft: '10px' }} />
              )}
            </h3>
            <div className={`toggle-content ${isExpanded1 ? "show" : ""}`}>
              <p>Orders & Shipping</p>
              <p>Join/Login as a Seller</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQS</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <hr className="hr" />

          <div className="right1">
            <div className="right2">
              <h3 onClick={handleToggle2} style={{ cursor: 'pointer' }}>
                FOLLOW US
                {isExpanded2 ? (
                  <FaChevronUp className="icons" style={{ marginLeft: '10px' }} />
                ) : (
                  <FaChevronDown className="icons" style={{ marginLeft: '10px' }} />
                )}
              </h3>
              <div className={`toggle-content ${isExpanded2 ? "show" : ""}`}>
                <img src={img1} alt="Icon 1" height="32" width="32" />
                <img src={img2} alt="Icon 2" height="32" width="32" />
              </div>
            </div>
            <hr className="hr" />
            <div className="right3">
              <h2>mettä muse ACCEPTS</h2>
              <img src={img3} alt="Payment 1" height="35" width="56" className="imge" />
              <img src={img4} alt="Payment 2" height="35" width="56" className="imge" />
              <img src={img5} alt="Payment 3" height="35" width="56" className="imge" />
              <img src={img6} alt="Payment 4" height="35" width="56" className="imge" />
              <img src={img7} alt="Payment 5" height="35" width="56" className="imge" />
              <img src={img8} alt="Payment 6" height="35" width="56" className="imge" />
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
