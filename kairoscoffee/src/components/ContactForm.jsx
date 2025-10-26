// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import '../styles/contacto.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        tipo: '',
        mensaje: '',
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
    const validarTelefono = (telefono) =>
        /^\+56 9\s\d{8}$/.test(telefono) || /^\+56 9\s\d{4}\s\d{4}$/.test(telefono);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: '' });
        setSuccess(false);
    };

    const validarFormulario = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
        if (!formData.email.trim()) newErrors.email = 'El correo electrónico es obligatorio.';
        else if (!validarEmail(formData.email)) newErrors.email = 'Por favor, ingresa un correo válido.';
        if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
        else if (!validarTelefono(formData.telefono))
        newErrors.telefono = 'Por favor, ingresa un número válido (e.g., +56 9 1234 5678).';
        if (!formData.tipo) newErrors.tipo = 'Por favor, selecciona una opción.';
        if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
        setSuccess(true);
        setFormData({ nombre: '', email: '', telefono: '', tipo: '', mensaje: '' });
        }
    };

    useEffect(() => {
        if (success) {
        const timer = setTimeout(() => {
            setSuccess(false);
        }, 1000);
        return () => clearTimeout(timer);
        }
    }, [success]);

    return (
        <section className="contact-section py-5">
        <div className="container">
            <div className="text-center mb-5">
            <h2 className="fw-bold text-uppercase">Contáctanos</h2>
            <p>Cuéntanos qué café o té buscas, o si quieres cotizar para tu negocio.</p>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card p-4">
                {success && <div className="alert alert-success mt-3 text-center">¡Mensaje enviado con éxito!</div>}
                <form className="row g-4" onSubmit={handleSubmit} noValidate>
                    <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        placeholder="Ingresa tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="tucorreo@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label fw-bold">Teléfono</label>
                    <input
                        id="telefono"
                        type="tel"
                        className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                        placeholder="56 9 1234 5678"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="tipo" className="form-label fw-bold">Interés Principal</label>
                    <select
                        id="tipo"
                        className={`form-select ${errors.tipo ? 'is-invalid' : ''}`}
                        value={formData.tipo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona...</option>
                        <option value="cafe">Café en grano/molido</option>
                        <option value="capsulas">Cápsulas</option>
                        <option value="teymate">Té / Yerba Mate</option>
                        <option value="accesorios">Accesorios</option>
                        <option value="mayorista">Venta Mayorista</option>
                    </select>
                    {errors.tipo && <div className="invalid-feedback">{errors.tipo}</div>}
                    </div>
                    <div className="col-12">
                    <label htmlFor="mensaje" className="form-label fw-bold">Mensaje</label>
                    <textarea
                        id="mensaje"
                        rows="4"
                        className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                        placeholder="Cuéntanos lo que necesitas..."
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                    {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                    </div>
                    <div className="col-12 text-center">
                    <button type="submit" className="btn btn-enviar">Enviar Mensaje</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContactForm;
