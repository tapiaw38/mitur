import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './me-page.scss';

import { useAuth } from '../../hooks/useAuth';

import profileIcon from '../../../assets/img/auth/profile.png';

export const MePage = () => {
    const { getProfile, userProfile, user } = useAuth();

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <div className='button-back-container'>
            <NavLink className="button-primary btn-back" to="/">
                Volver al Inicio
            </NavLink>
            </div>
            <div className="flex flex-row justify-content-center container-card-profile">
                <div className="flex flex-row justify-content-center align-items-center">
                    <div className="card-profile mt-4 justify-content-center">
                        <div className="flex flex-column card-body align-items-center justify-content-center">
                            <div
                                className="card-img"
                                style={{
                                    backgroundImage: `url(${
                                        user?.picture
                                            ? user.picture
                                            : profileIcon
                                    })`
                                }}></div>
                            <div className="mt-2">
                                <input type="file" />
                            </div>
                        </div>
                        <div className="flex flex-column card-body align-items-center justify-content-center">
                            <span className="card-title color-secondary">
                                {userProfile?.first_name}{' '}
                                {userProfile?.last_name}
                            </span>
                            <span className="card-title color-secondary">
                                Email: {userProfile?.email}
                            </span>
                            <span className="card-title color-secondary">
                                Tel: {userProfile?.phone_number}
                            </span>
                            <span className="card-title color-secondary">
                                Direccion: {userProfile?.address}
                            </span>
                        </div>
                        <div className="flex flex-row justify-content-center mb-2">
                            <button className="button-secondary btn-edit-profile">
                                Editar perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
