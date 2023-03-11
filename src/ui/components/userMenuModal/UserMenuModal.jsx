import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserMenuModal.scss';

export const UserMenuModal = ({ logout }) => {
    return (
        <div className="user-menu-modal">
            <div className="menu-items">
                <NavLink to="/auth/me" >Mi perfil</NavLink>
                <span onClick={logout}>Cerrar Sesión</span>
            </div>
        </div>
    );
};
