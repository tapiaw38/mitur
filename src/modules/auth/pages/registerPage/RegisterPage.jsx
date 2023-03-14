import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from '@/hooks/useForm';
import { RegisterForm } from '../../components/registerFom/RegisterForm';
import { useAuth } from '../../hooks/useAuth';

import './RegisterPage.scss';
import Toast, { newToast } from '../../../../ui/components/toast/Toast';

export const RegisterPage = () => {
    const { formState, onInputChange } = useForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const { onRegister, errorMessage } = useAuth();
    const [errors, setErrors] = useState({});
    const [thetoasts, SetThetoasts] = useState([]);
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        if (formState.password !== formState.password_confirmation ) {
            setErrors({
                ...errors,
                password_confirmation: 'Las contraseñas no coinciden'
            });
        } else if (formState.password.length < 8) {
            setErrors({
                ...errors,
                password: 'La contraseña debe tener al menos 8 caracteres'
            });
        } else if (!EMAIL_REGEX.test(formState.email)) {
            setErrors({
                ...errors,
                email: 'El email no es válido'
            });
        } else if (!USERNAME_REGEX.test(formState.username)) {
            setErrors({
                ...errors,
                username: 'El username no es válido'
            });
        } else {
            onRegister(formState);
        }
    };

    useEffect(() => {
        if(errorMessage) {
            const message="Ocurrió un error al crear el usuario";
            const OneToast=newToast(message, 'danger');
            SetThetoasts([...thetoasts,OneToast]);
        }
    }, [errorMessage]);

    return (
        <>
            <div className="button-back-container">
                <NavLink className="button-primary btn-back" to="/">
                    Volver al Inicio
                </NavLink>
            </div>
            <RegisterForm
                onInputChange={onInputChange}
                formState={formState}
                onSubmit={onSubmit}
                errors={errors}
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
