import React from "react";
import "./NaveguePorMarcas.scss";
import logo from "../../assets/logo.png";

export const NaveguePorMarcas: React.FC = () => {
  const marcas = [logo, logo, logo, logo, logo];

  return (
    <section className="marcas-section">
      <h2>Navegue por marcas</h2>

      <div className="marcas-container">
        {marcas.map((logo, index) => (
          <div key={index} className="marca-avatar">
            <img src={logo} alt={`Logo da marca ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};
