// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
