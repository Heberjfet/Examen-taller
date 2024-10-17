import React from 'react';
import './formulario.css';

const Formulario = () => {
  return (
    <div className="container mt-5 formulario-container">
      <h2>Inicio de Sesión</h2>
      <form className="formulario-form">
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      <footer className="formulario-footer">
        <p>&copy; 2024 Mi Aplicación examen de taller.</p>
      </footer>
    </div>
  );
};

export default Formulario;