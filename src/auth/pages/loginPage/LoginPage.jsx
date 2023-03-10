import React from 'react';
import { LoginForm } from '../../components/loginForm/LoginForm';
import { useForm } from '../../../hooks/useForm';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './login-page.scss';

export const LoginPage = () => {
    const { onLogin, userCreated } = useAuth();
    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(formState);
    };

    const showUserCreatedMessage = () => {
        if (userCreated) {
            return (
                <div className='user-created'>
                    <p>Usuario creado correctamente</p>
                    <p>Te hemos enviado un link para validar tu email a { userCreated.email }</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <div className="button-back-container">
                <NavLink className="button-primary btn-back" to="/">
                    Volver al Inicio
                </NavLink>
            </div>
            <LoginForm
                onInputChange={onInputChange}
                formState={formState}
                onSubmit={onSubmit}
            />
            { showUserCreatedMessage() }
        </>
    );
};
