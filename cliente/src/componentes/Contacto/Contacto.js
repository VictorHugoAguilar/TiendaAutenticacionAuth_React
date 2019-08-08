import React, { Component } from "react";
import "./Contacto.css";

class Contacto extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        console.log(isAuthenticated());
        return (
            <div className="productos">
                {!isAuthenticated() && (
                    <div className="contenedor-boton">
                        <p>Para ver el contenido debes estar logueado:</p>
                        <a className="boton" onClick={this.login}>
                            Iniciar Sesión
                        </a>
                    </div>
                )}

                {isAuthenticated() && (
                    <form>
                        <legend>Formulario de Contacto</legend>
                        <div className="input-field">
                            <label>Nombre: </label>
                            <input type="text" placeholder="Tu Nombre" />
                        </div>
                        <div className="input-field">
                            <label>Email: </label>
                            <input type="email" placeholder="Tu Email" />
                        </div>
                        <div className="input-field">
                            <label>Mensaje: </label>
                            <textarea />
                        </div>
                        <div className="input-field enviar">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default Contacto;
