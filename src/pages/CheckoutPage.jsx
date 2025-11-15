// src/pages/CheckoutPage.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const { cart, total } = useCart();
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <section>
        <h1>¡Compra realizada!</h1>
        <p style={{ marginTop: 12 }}>
          Gracias por tu compra en Sombra Urbana. (Simulación de checkout)
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>Checkout</h1>
      <p style={{ marginTop: 8, color: "var(--text-muted)" }}>
        Total de tu compra: <strong>${total.toLocaleString()}</strong>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: 24, maxWidth: 400, display: "flex", flexDirection: "column", gap: 12 }}
      >
        <input placeholder="Nombre y apellido" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input placeholder="Dirección" required />
        <input placeholder="Ciudad" required />
        <input placeholder="Medio de pago (simulado)" required />

        <button type="submit" className="add-btn">
          Confirmar compra
        </button>
      </form>

      <h2 style={{ marginTop: 32 }}>Resumen</h2>
      <ul style={{ marginTop: 12 }}>
        {cart.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} (${item.price.toLocaleString()})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CheckoutPage;
