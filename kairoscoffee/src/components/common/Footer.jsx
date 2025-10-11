// RUTA: src/components/common/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';

// 1. Importa el módulo de estilos
import styles from './Footer.module.css';

// Importa tus imágenes desde la carpeta assets
import logo from '../../assets/img/Logo_KairosCoffee.png';
import flowLogo from '../../assets/img/logo-flow.jpg';
import webpayLogo from '../../assets/img/webpay.webp';
import transbankLogo from '../../assets/img/transbank.png';
import mercadoPagoLogo from '../../assets/img/mercado-pago.webp';
import facebookIcon from '../../assets/img/facebook-icon.png';
import instagramIcon from '../../assets/img/instagram-icon.png';

const Footer = () => {
    return (
        // 2. Aplica la clase del módulo junto con las de Bootstrap
        <footer className={`${styles.mainFooter} py-4 mt-5`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 mb-4 text-center text-md-start">
                        {/* 3. Reemplaza estilos en línea por clases del módulo */}
                        <img src={logo} alt="Kairós Coffee Logo" className={`${styles.logoImg} mb-3`} />
                        <h5 className="fw-bold">Métodos de Pago:</h5>
                        <div className="d-flex justify-content-center justify-content-md-start gap-2">
                            <img src={flowLogo} alt="Flowpagos" className={styles.paymentIcon} />
                            <img src={webpayLogo} alt="Webpay" className={styles.paymentIcon} />
                            <img src={transbankLogo} alt="Transbank" className={styles.paymentIcon} />
                            <img src={mercadoPagoLogo} alt="Mercado Pago" className={styles.paymentIcon} />
                        </div>
                    </div>

                    <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                        <h5 className="fw-bold">Kairós Coffee</h5>
                        <ul className="list-unstyled">
                            {/* Los links ya usan clases de Bootstrap, lo cual está perfecto */}
                            <li><Link to="/nosotros" className="text-white text-decoration-none">Nuestra Historia</Link></li>
                            <li><Link to="/productos" className="text-white text-decoration-none">Productos</Link></li>
                            <li><Link to="/contacto" className="text-white text-decoration-none">Contacto</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                        <h5 className="fw-bold">Información</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/faq" className="text-white text-decoration-none">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-12 col-md-5 text-center text-md-start">
                        <NewsletterForm />
                        <h5 className="fw-bold mt-4">Contáctanos</h5>
                        <p>
                            {/* 4. Corregido el typo en el email */}
                            Si tienes alguna pregunta escríbenos a <a href="mailto:ventas@kairoscoffee.cl" className="text-white">ventas@kairoscoffee.cl</a> o a nuestro whatsapp +56999345711.
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.footerBottom} text-center pt-3 mt-3 border-top border-secondary`}>
                 {/* 5. Año dinámico */}
                <p>&copy; {new Date().getFullYear()} Kairós Coffee. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;