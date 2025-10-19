import React from "react";
import "./Newsletter.scss";

export const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <div className="newsletter-right">
        <div className="inputs">
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu email" />
          <button>INSCREVER</button>
        </div>

        <label className="checkbox">
          <input type="checkbox" />
          <span>Aceito os termos e condições</span>
        </label>
      </div>
    </section>
  );
};
