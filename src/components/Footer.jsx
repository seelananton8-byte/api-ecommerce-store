import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>ShopZone</h2>

          <p>
            Simple shopping experience with quality products
            at affordable prices.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopZone. All rights reserved.</p>
      </div>
    </footer>
  );
}