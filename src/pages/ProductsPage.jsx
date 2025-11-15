// src/pages/ProductsPage.jsx
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [search, setSearch] = useState("");

  const categories = ["todos", "remeras", "buzos", "pantalones", "calzado"];

  // FILTRO POR CATEGORÍA
  const filteredByCategory =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // FILTRO POR BÚSQUEDA
  const filteredProducts = filteredByCategory.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h1>Catálogo</h1>

      {/* BUSCADOR */}
      <input
        className="search-input"
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTROS */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              selectedCategory === cat ? "filter-btn active" : "filter-btn"
            }
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* GRILLA DE PRODUCTOS */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))
        ) : (
          <p style={{ marginTop: 20 }}>No se encontraron productos.</p>
        )}
      </div>
    </section>
  );
}

export default ProductsPage;
