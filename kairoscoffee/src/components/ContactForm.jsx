import React, { useState } from "react";
import "../styles/contacto.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        tipo: "",
        mensaje: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validarTelefono = (telefono) => {
        const re = /^\+56 9\s\d{8}$/;
        const re2 = /^\+56 9\s\d{4}\s\d{4}$/;
        return re.test(telefono) || re2.test(telefono);
    };

    const validarFormulario = () => {
        let newErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
        if (!formData.email.trim())
        newErrors.email = "El correo electrónico es obligatorio.";
        else if (!validarEmail(formData.email))
        newErrors.email = "Por favor, ingresa un correo válido.";

        if (!formData.telefono.trim())
        newErrors.telefono = "El teléfono es obligatorio.";
        else if (!validarTelefono(formData.telefono))
        newErrors.telefono =
            "Por favor, ingresa un número válido (e.g., +56 9 1234 5678).";

        if (!formData.tipo)
        newErrors.tipo = "Por favor, selecciona una opción.";

        if (!formData.mensaje.trim())
        newErrors.mensaje = "El mensaje es obligatorio.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({
            nombre: "",
            email: "",
            telefono: "",
            tipo: "",
            mensaje: "",
        });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-5">
        <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
            <h2 className="text-center mb-4">Contáctanos</h2>
            <p className="text-muted text-center">
            Cuéntanos qué café o té buscas, o si quieres cotizar para tu negocio.
            </p>

            {success && (
            <div className="alert alert-success text-center">
                ¡Mensaje enviado con éxito!
            </div>
            )}

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+56 9 1234 5678"
                className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                />
                {errors.telefono && (
                <div className="invalid-feedback">{errors.telefono}</div>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Interés Principal</label>
                <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className={`form-select ${errors.tipo ? "is-invalid" : ""}`}
                >
                <option value="">Selecciona...</option>
                <option value="Café en grano/molido">Café en grano/molido</option>
                <option value="Cápsulas">Cápsulas</option>
                <option value="Té / Yerba Mate">Té / Yerba Mate</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Venta Mayorista">Venta Mayorista</option>
                </select>
                {errors.tipo && <div className="invalid-feedback">{errors.tipo}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                ></textarea>
                {errors.mensaje && (
                <div className="invalid-feedback">{errors.mensaje}</div>
                )}
            </div>

            <div className="text-center">
                <button type="submit" className="btn-enviar">
                Enviar Mensaje
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;
