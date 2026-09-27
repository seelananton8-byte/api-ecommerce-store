import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchedData = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL
      );

      const data = await response.json();

      const formattedProducts = data.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      }));

      setProducts(formattedProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="home-label">WELCOME TO SHOPZONE</p>

          <h1>
            Everything You Need,
            <span> All in One Place.</span>
          </h1>

          <p className="home-description">
            Discover quality products, simple shopping,
            and great value — all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="shop-button">
              Shop Now →
            </Link>

            <Link to="/cart" className="view-cart-button">
              View Cart
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <p>FEATURED</p>
          <h2>Smart Shopping</h2>
          <span>Quality products at affordable prices.</span>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="feature">
          <div className="feature-icon">✓</div>
          <div>
            <h3>Quality Products</h3>
            <p>Carefully selected products.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">₹</div>
          <div>
            <h3>Affordable Prices</h3>
            <p>Great products at fair prices.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⚡</div>
          <div>
            <h3>Easy Shopping</h3>
            <p>Simple and smooth checkout.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="home-label">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/products">View All →</Link>
        </div>

        {loading ? (
          <div className="no-products">
            <h2>Loading Products...</h2>
            <p>Please wait while we fetch the products.</p>
          </div>
        ) : (
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                className="featured-card"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="featured-content">
                  <span>{product.category}</span>

                  <h3>{product.title}</h3>

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <p className="home-label">START SHOPPING</p>

          <h2>Find Something You'll Love.</h2>

          <p>
            Explore our complete collection and discover your
            next favorite product.
          </p>
        </div>

        <Link to="/products" className="shop-button">
          Explore Products →
        </Link>
      </section>
    </main>
  );
}