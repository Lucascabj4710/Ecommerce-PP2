import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Guarda el carrito en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -------------------------
  // AGREGAR AL CARRITO
  // -------------------------
  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      Swal.fire({
        title: "Cantidad aumentada",
        text: `Se sumó otra unidad de ${product.name}.`,
        icon: "info",
        background: "#0f172a",
        color: "#f1f5f9",
        iconColor: "#38bdf8",
        confirmButtonColor: "#38bdf8",
      });
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);

      Swal.fire({
        title: "Agregado al carrito",
        text: `${product.name} fue añadido correctamente.`,
        icon: "success",
        background: "#0f172a",
        color: "#f1f5f9",
        iconColor: "#38bdf8",
        confirmButtonColor: "#38bdf8",
      });
    }
  }

  // -------------------------
  // BORRAR DEL CARRITO
  // -------------------------
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // -------------------------
  // AUMENTAR CANTIDAD
  // -------------------------
  function increaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // -------------------------
  // DISMINUIR CANTIDAD
  // -------------------------
  function decreaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }

  // -------------------------
  // TOTAL DE PRODUCTOS
  // -------------------------
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // -------------------------
  // TOTAL A PAGAR
  // -------------------------
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
