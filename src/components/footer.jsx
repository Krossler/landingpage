import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_content">
            <p>Contato: 11 3015-1074</p>
            <p>E-mail: germankrossler@gmail.com</p>
        </div>
        <div className="footer_content">
            <p>Endereço: Av. Federico Lacroze 2520 CABA</p>
            <p>© 2024 Francisco Krossler</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;