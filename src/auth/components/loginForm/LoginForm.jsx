import React from 'react';
import { NavLink } from 'react-router-dom';
import './login-form.scss';

export const LoginForm = (props) => {
    const { onInputChange, formState, onSubmit } = props;

    return (
        <div className="container-form">
            <form onSubmit={onSubmit}>
                <div className="card-form">
                    <h2>Iniciar Sesión</h2>

                    <div className="form">
                        <div className="form-control">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={formState.email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={formState.password}
                                onChange={onInputChange}
                            />
                        </div>
                        <button
                            className="button-primary"
                            type="submit">
                            Ingresar
                        </button>
                    </div>
                </div>
            </form>
            <span className="flex flex-row mt-2">
                Aún no tienes una cuenta?
                <NavLink className="ml-1" to="/auth/register">Registar</NavLink>
            </span>
        </div>
    );
};
