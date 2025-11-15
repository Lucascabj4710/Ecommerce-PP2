import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["S", "M", "L", "XL"];

  if (!product) return <h2>Producto no encontrado</h2>;

  const handleAdd = () => {
    if (!selectedSize) {
      Swal.fire({
        title: "Seleccioná un talle",
        text: "Debes elegir un talle antes de agregar al carrito.",
        icon: "warning",
        background: "#0f172a",
        color: "#f1f5f9",
        confirmButtonColor: "#38bdf8",
      });
      return;
    }

    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="detail-description">{product.description}</p>

        <p className="detail-price">${product.price}</p>

        <h3 style={{ marginTop: "20px" }}>Talles disponibles</h3>

        <div className="size-selector">
          {sizes.map((s) => (
            <button
              key={s}
              className={selectedSize === s ? "size-btn active" : "size-btn"}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="add-btn" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
