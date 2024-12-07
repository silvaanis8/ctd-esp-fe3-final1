import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import logoDH from "/images/DH.png";

// Datos de redes sociales
const socialLinks = [
  { name: "Facebook", icon: "/images/ico-facebook.png", url: "https://facebook.com" },
  { name: "Instagram", icon: "/images/ico-instagram.png", url: "https://instagram.com" },
  { name: "WhatsApp", icon: "/images/ico-whatsapp.png", url: "https://whatsapp.com" },
  { name: "TikTok", icon: "/images/ico-tiktok.png", url: "https://tiktok.com" },
];

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={`footer ${state.theme}`}>
      <div className="footer-top">
        <a href="#top" className="back-to-top">
          VOLTAR PARA O TOPO
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoDH} alt="Digital House Logo" />
        </div>
        <div className="footer-icons">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir para ${link.name}`}
            >
              <img src={link.icon} alt={`${link.name} Icon`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;