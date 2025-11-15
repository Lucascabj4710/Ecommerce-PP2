// src/components/Navbar.jsx
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO + MARCA */}
        <Link to="/" className="brand">
          <img
            src="/img/logo.png"
            alt="Sombra Urbana"
            className="brand-logo"
          />
          <span>Sombra Urbana</span>
        </Link>

        {/* MENÚ */}
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            Admin
          </NavLink>

          <NavLink to="/carrito" className="cart-pill">
            <span>Carrito</span>
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
