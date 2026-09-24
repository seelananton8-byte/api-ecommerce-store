import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import "../styles/product-details.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
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
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="product-details-page">
        <h1>Loading Product...</h1>
      </main>
    );
  }

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">
        <h1>Product Not Found</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="details-content">
          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <p className="details-description">
            {product.description}
          </p>

          <h2>
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <button
            type="button"
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <Link to="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </div>

      {showToast && (
        <div className="cart-toast">
          Added to Cart ✓
        </div>
      )}
    </main>
  );
}