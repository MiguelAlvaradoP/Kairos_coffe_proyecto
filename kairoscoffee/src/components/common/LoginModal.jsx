// RUTA: src/components/common/LoginModal.jsx

import React, { useState, useEffect } from "react";
// 2. Importamos Link para la navegación interna
import { Link } from "react-router-dom";
// 1. Importamos el módulo de estilos específico del componente
import styles from "./LoginModal.module.css";

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Efecto para mostrar el mensaje de éxito y luego cerrar
    useEffect(() => {
        if (message && message.type === 'success') {
            const timer = setTimeout(() => {
                onClose();
            }, 1500);
            // Limpiamos el temporizador si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de autenticación (puedes conectar con authService luego)
        // Usamos un timeout para simular una llamada a la API
        setTimeout(() => {
            if (email === "demo@kairoscoffee.cl" && password === "1234") {
                setMessage({ type: "success", text: "Inicio de sesión exitoso ☕" });
            } else {
                setMessage({ type: "error", text: "Credenciales incorrectas" });
            }
            setIsSubmitting(false);
        }, 500); // Simula 0.5s de carga
    };

    return (
        // 3. Ya no usamos la clase .active, el modal es visible por defecto
        <dialog
            open
            className={styles.modal}
            aria-labelledby="loginTitle"
        >
            {/* 4. Usamos camelCase para las clases: styles.modalContent */}
            <div className={styles.modalContent}>
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Cerrar modal"
                >
                    &times;
                </button>

                <h2 id="loginTitle">Iniciar Sesión</h2>

                {message && (
                    <div
                        // Lógica de clases para el mensaje de estado
                        className={`${styles.loginMessage} ${
                            message.type === 'error' ? styles.error : styles.show
                        }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? 'Verificando...' : 'Entrar'}
                    </button>
                </form>

                <p className="mt-3 text-center">
                    ¿No tienes cuenta?{" "}
                    {/* 2. Usamos Link en lugar de <a> para evitar recargas */}
                    <Link to="/registro" className={styles.linkRegistro}>
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </dialog>
    );
};

export default LoginModal;