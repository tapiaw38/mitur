import React from 'react';
import "./google-button.scss"

import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../hooks/useAuth';

export const GoogleButton = () => {
    const { onGoogleLogin } = useAuth();
    
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: (codeResponse) => {
            onGoogleLogin('google', codeResponse.code);
        }
    });
    
    return (
        <button className="google-btn" onClick={() => login()}>
            <span className="icon"></span>
            <span className="text">Iniciar con Google</span>
        </button>
    );
};
