// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
    return (
        <footer className="main-footer py-4 mt-5 bg-custom-dark text-white">
        <div className="container">
            <div className="row">
            {/* Columna 1: Logo y Pagos */}
            <div className="col-12 col-md-3 mb-4 text-center text-md-start">
                {/* Reemplaza ASSETS/img/Logo_KairosCoffee.png con la ruta de React, ej: /assets/Logo_KairosCoffee.png */}
                <img src="/assets/img/Logo_KairosCoffee.png" alt="Kairós Coffee Logo" className="img-fluid mb-3" style={{ maxWidth: '150px' }} />
                <h5 className="fw-bold">Métodos de Pago:</h5>
                <div className="d-flex justify-content-center justify-content-md-start gap-2">
                {/* Rutas de imágenes simplificadas para ejemplo */}
                <img src="https://i.imgur.com/gK2g09n.png" alt="Flow" style={{ width: '50px' }} />
                <img src="https://i.imgur.com/vHqB9yU.png" alt="Webpay" style={{ width: '50px' }} />
                <img src="https://i.imgur.com/i9o3yLh.png" alt="Transbank" style={{ width: '50px' }} />
                <img src="https://i.imgur.com/nJ2uU7w.png" alt="Mercado Pago" style={{ width: '50px' }} />
                </div>
            </div>

            {/* Columna 2: Kairós Coffee */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                <h5 className="fw-bold">Kairós Coffee</h5>
                <ul className="list-unstyled">
                <li><Link to="/historia" className="text-white text-decoration-none">Nuestra Historia</Link></li>
                <li><Link to="/productos" className="text-white text-decoration-none">Productos</Link></li>
                <li><Link to="/contacto" className="text-white text-decoration-none">Contacto</Link></li>
                <li><Link to="/chile" className="text-white text-decoration-none">Kairós Coffee Chile</Link></li>
                </ul>
            </div>

            {/* Columna 3: Información */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
                <h5 className="fw-bold">Información</h5>
                <ul className="list-unstyled">
                <li><Link to="/faq" className="text-white text-decoration-none">Preguntas Frecuentes</Link></li>
                <li><Link to="/despachos" className="text-white text-decoration-none">Despachos y Retiros</Link></li>
                <li><Link to="/cambios" className="text-white text-decoration-none">Cambios y Devoluciones</Link></li>
                <li><Link to="/terminos" className="text-white text-decoration-none">Términos y Condiciones</Link></li>
                </ul>
            </div>

            {/* Columna 4: Newsletter y Contacto */}
            <div className="col-12 col-md-5 text-center text-md-start">
                <h5 className="fw-bold">Newsletter</h5>
                <p>Suscríbete a nuestro newsletter y entérate de todas nuestras ofertas y novedades.</p>
                <NewsletterForm />
                
                <h5 className="fw-bold mt-4">Contáctanos</h5>
                <p>
                Si tienes alguna pregunta escríbenos a
                <a href="mailto:ventas@cairoscoffee.cl" className="text-white"> ventas@cairoscoffee.cl</a> o a nuestro whatsapp +56999345711.
                ¡Nos pondremos en contacto contigo lo antes posible!
                </p>
                <div className="social-links d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#"><img src="https://i.imgur.com/A6jLgJ8.png" alt="Facebook" style={{ width: '30px' }} /></a>
                <a href="#"><img src="https://i.imgur.com/R0Z4T7T.png" alt="Instagram" style={{ width: '30px' }} /></a>
                </div>
            </div>
            </div>
        </div>
        <div className="footer-bottom text-center pt-3 mt-3 border-top border-secondary">
            <p>&copy; 2025 Kairós Coffee. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
};

export default Footer;