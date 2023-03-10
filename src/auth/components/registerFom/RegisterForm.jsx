import React from 'react';
import { NavLink } from 'react-router-dom';
import './register-form.scss';

export const RegisterForm = (props) => {
    const { onInputChange, formState, onSubmit, errors } = props;

    return (
        <div className="container-form">
            <form onSubmit={onSubmit}>
                <div className="card-form">
                    <h2>Registrarse</h2>
                    <div className="form">
                        <div className="form-control">
                            <label htmlFor="">Nombre</label>
                            <input
                                type="text"
                                name="first_name"
                                value={formState.first_name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Apellido</label>
                            <input
                                type="text"
                                name="last_name"
                                value={formState.last_name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formState.username}
                                onChange={onInputChange}
                            />
                            {
                                errors?.username && (
                                    <span className="error">
                                        {errors.username}
                                    </span>
                                )
                            }
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={onInputChange}
                            />
                            {
                                errors?.email && (
                                    <span className="error">
                                        {errors.email}
                                    </span>
                                )
                            }
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
                        <div className="form-control">
                            <label htmlFor="">
                                Confirmar Contraseña
                            </label>
                            <input
                                type="password"
                                name="password_confirmation"
                                value={
                                    formState.password_confirmation
                                }
                                onChange={onInputChange}
                            />
                            {
                                errors?.password_confirmation && (
                                    <span className="error">
                                        {errors.password_confirmation}
                                    </span>
                                )
                            }
                        </div>
                        <button
                            className="button-primary"
                            type="submit">
                            Registrarse
                        </button>
                    </div>
                </div>
            </form>
            <span className="flex flex-row mt-2">
                Ya tenes una cuenta?
                <NavLink className="ml-1" to="/auth/login">ingresar</NavLink>
            </span>
        </div>
    );
};
