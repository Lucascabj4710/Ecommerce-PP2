// src/pages/AdminPage.jsx
import { useState } from "react";
import productsData from "../data/products";

function AdminPage() {
  const [products, setProducts] = useState(productsData);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleAdd(e) {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: form.name,
      price: Number(form.price),
      category: form.category || "remeras",
      image: form.image || "/img/tshirt_black.png",
      description: "Producto cargado desde el panel de administración.",
      stock: 5,
    };
    setProducts((prev) => [...prev, newProduct]);

    setForm({ name: "", price: "", category: "", image: "" });
  }

  return (
    <section className="admin-page">
      <h1 className="admin-title">Panel de Administración</h1>
      <p className="admin-sub">
        Gestioná los productos del catálogo. Esta sección es una simulación visual.
      </p>

      {/* FORMULARIO */}
      <form className="admin-form" onSubmit={handleAdd}>
        <input
          name="name"
          placeholder="Nombre del producto"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Categoría (remeras, buzos, etc.)"
          value={form.category}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Ruta de imagen (/img/...)"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit" className="add-btn admin-btn">
          Agregar producto
        </button>
      </form>

      {/* LISTADO */}
      <h2 className="admin-list-title">Productos cargados</h2>

      <div className="admin-list">
        {products.map((p) => (
          <div key={p.id} className="admin-card">
            <img src={p.image} alt={p.name} />
            <div className="admin-card-info">
              <h3>{p.name}</h3>
              <p className="admin-card-price">${p.price.toLocaleString()}</p>
              <span className="admin-tag">{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminPage;
