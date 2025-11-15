// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1 className="hero-title">Sombra Urbana</h1>
        <p className="hero-sub">
          Moda urbana con esencia nocturna. Diseños minimalistas en tonos oscuros.
        </p>

        <Link to="/productos" className="hero-button">
          Ver colección
        </Link>
      </div>

      <div className="hero-categories">
        <div className="cat-card">
          <img src="/img/hoodie_black.png" alt="Buzos" />
          <span>Buzos</span>
        </div>

        <div className="cat-card">
          <img src="/img/tshirt_black.png" alt="Remeras" />
          <span>Remeras</span>
        </div>

        <div className="cat-card">
          <img src="/img/jeans_dark.png" alt="Pantalones" />
          <span>Pantalones</span>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
