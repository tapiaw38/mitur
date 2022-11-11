import React from 'react';
import { LoginForm } from '../../components/loginForm/LoginForm';
import { useForm } from '../../../hooks/useForm';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './login-page.scss'

export const LoginPage = () => {

  const { onLogin } = useAuth();
  const { formState, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = e => {
    e.preventDefault();
    onLogin(formState);
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
    </>
  );
};
