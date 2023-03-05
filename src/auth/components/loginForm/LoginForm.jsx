import React from 'react';
import { GoogleButton } from '../googleButton/GoogleButton';
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
            <div className='container-google-btn mt-2'>
                <GoogleButton />
            </div>
        </div>
    );
};
