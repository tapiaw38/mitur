import React from 'react';
import './user-menu-modal.scss';

export const UserMenuModal = ({ user, logout }) => {
    return (
        <div className="user-menu-modal">
            <div className="menu-items">
                <span>Mi perfil</span>
                <span onClick={logout}>Cerrar Sesión</span>
            </div>
        </div>
    );
};
