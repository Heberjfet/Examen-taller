import React from 'react';
import './formulario.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>

        <div className="text-center mt-4">
          <p>¿No tienes cuenta? <a href="#!">Regístrate</a></p>
          <p>o inicia sesión con:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
      <footer className="formulario-footer">
        <p>&copy; 2024 Mi Aplicación examen de taller.<br /> Heber Jafet Alvaro Ramirez</p>
      </footer>
    </div>
  );
};

export default Formulario;