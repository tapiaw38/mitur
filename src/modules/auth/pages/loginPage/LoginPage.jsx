import React, { useEffect, useState } from 'react';
import { LoginForm } from '../../components/loginForm/LoginForm';
import { useForm } from '@/hooks/useForm';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './LoginPage.scss';
import Toast, {
    newToast
} from '../../../../ui/components/toast/Toast';

export const LoginPage = () => {
    const { onLogin, userCreated } = useAuth();
    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });
    const [thetoasts, SetThetoasts] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(formState);
    };

    useEffect(() => {
        if (userCreated) {
            const message = `Verificación de email enviada a ${userCreated.email}`;
            const OneToast = newToast(message, 'success');
            SetThetoasts([...thetoasts, OneToast]);
        }
    }, []);

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
            <Toast
                toastList={thetoasts}
                position="bottom-left"
                autoDelete={true}
                autoDeleteTime={5000}
            />
        </>
    );
};
