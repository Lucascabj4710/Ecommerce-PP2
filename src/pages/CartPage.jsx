// src/pages/CartPage.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h1>El carrito está vacío.</h1>
        <p style={{ marginTop: 12 }}>
          Volvé al <Link to="/productos">catálogo</Link> para agregar productos.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>Tu carrito</h1>

      <div className="cart-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>

              {/* MOSTRAR EL TALLE */}
              <p className="cart-size">Talle: {item.size}</p>

              <p>${item.price.toLocaleString()}</p>

              <div className="cart-qty">
                <button onClick={() => decreaseQuantity(item.id, item.size)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id, item.size)}>
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <div className="cart-total">
          <h2>Total: ${total.toLocaleString()}</h2>

          <Link
            to="/checkout"
            className="add-btn"
            style={{
              display: "inline-block",
              textDecoration: "none",
              marginTop: 16,
            }}
          >
            Ir al checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
