import { Link } from "react-router-dom";
import "../styles/checkout.css";

export default function OrderSuccess() {
  return (
    <main className="order-success-page">
      <div className="order-success-card">
        <div className="success-icon">✓</div>

        <p className="success-label">ORDER CONFIRMED</p>

        <h1>Thank You for Your Order!</h1>

        <p>
          Your order has been placed successfully.
          We will process it shortly.
        </p>

        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}