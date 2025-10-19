import React from "react";
import "./Parceiros.scss";

import partner from "../../assets/partner.jpg";

export const Parceiros: React.FC = () => {
  return (
    <section className="parceiros-section">
      <div className="parceiros-container">
        <div className="parceiro-card">
          <img src={partner} alt="Parceiro 1" className="parceiro-img" />
          <div className="parceiro-overlay">
            <h2>Parceiros</h2>
            <p>Conheça nossos parceiros e suas ofertas exclusivas.</p>
            <button>CONFIRA</button>
          </div>
        </div>

        <div className="parceiro-card">
          <img src={partner} alt="Parceiro 2" className="parceiro-img" />
          <div className="parceiro-overlay">
            <h2>Parceiros</h2>
            <p>Confira as melhores marcas que estão com a gente.</p>
            <button>CONFIRA</button>
          </div>
        </div>
      </div>
    </section>
  );
};
