import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.scss";

import logo from "../../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt lacinia, nunc est placerat tortor.
          </p>
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaFacebookF className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-right">
          <div className="footer-group">
            <h3>Institucional</h3>
            <ul>
              <li>Sobre nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

          <div className="footer-group">
            <h3>Ajuda</h3>
            <ul>
              <li>Suporte</li>
              <li>Fale conosco</li>
              <li>Perguntas frequentes</li>
            </ul>
          </div>

          <div className="footer-group">
            <h3>Termos</h3>
            <ul>
              <li>Termos e condições</li>
              <li>Políticas de Privacidade</li>
              <li>Trocas e Devolução</li>
            </ul>
          </div>
        </div>
      </footer>
      <p className="last-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </>
  );
};
