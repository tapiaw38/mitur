import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MePage.scss';

import { useAuth } from '../../hooks/useAuth';

import profileIcon from '../../../assets/img/auth/profile.png';
import { useModal } from '../../../hooks/useModal';
import { BaseModal } from '../../../ui/components/baseModal/BaseModal';
import { UserForm } from '../../components/userForm/UserForm';
import { useForm } from '../../../hooks/useForm';

export const MePage = () => {
    const { getProfile, userProfile, updateUser } = useAuth();
    const { showModal, setShowModal, handleCloseModal } = useModal();
    const { formState, onInputChange, onResetForm } = useForm({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        phone_number: '',
        picture: '',
        address: '',
        is_active: '',
        verified_email: '',
        token: '',
        token_expiry: ''
    });
    const [errors, setErrors] = useState({});
    const PHONE_NUMBER_REGEX = /^[0-9]{10}$/;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!PHONE_NUMBER_REGEX.test(formState.phone_number)) {
            setErrors({
                ...errors,
                phone_number: 'El número de teléfono no es válido'
            });
        } else if (formState.phone_number.length < 10) {
            setErrors({
                ...errors,
                phone_number:
                    'El número de teléfono debe tener 10 dígitos'
            });
        } else {
            updateUser(formState);
            handleCloseModal();
        }
    };

    useEffect(() => {
        getProfile();
        if (userProfile) {
            onResetForm({
                id: userProfile?.id,
                first_name: userProfile?.first_name,
                last_name: userProfile?.last_name,
                email: userProfile?.email,
                username: userProfile?.username,
                phone_number: userProfile?.phone_number,
                picture: userProfile?.picture,
                address: userProfile?.address,
                is_active: userProfile?.is_active,
                verified_email: userProfile?.verified_email,
                token: userProfile?.token,
                token_expiry: userProfile?.token_expiry
            });
        }
    }, [showModal]);

    return (
        <>
            <div className="button-back-container">
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
                                        userProfile?.picture
                                            ? userProfile.picture
                                            : profileIcon
                                    })`
                                }}></div>
                            <div className="mt-2">
                                <input type="file" />
                            </div>
                        </div>
                        <div className="flex flex-column card-body align-items-center justify-content-center">
                            <span className="profile-title color-secondary">
                                {userProfile?.first_name}{' '}
                                {userProfile?.last_name}
                            </span>
                            <span className="profile-title color-secondary">
                                Email: {userProfile?.email}
                            </span>
                            <span className="profile-title color-secondary">
                                Tel:{' '}
                                {userProfile?.phone_number ||
                                    'Sin registrar'}
                            </span>
                            <span className="profile-title color-secondary">
                                Direccion:{' '}
                                {userProfile?.address ||
                                    'Sin registrar'}
                            </span>
                        </div>
                        <div className="flex flex-row justify-content-center mb-2">
                            <button
                                onClick={() => setShowModal(true)}
                                className="button-secondary btn-edit-profile">
                                Editar perfil
                            </button>
                        </div>
                    </div>
                </div>
                {/* edit profile modal */}
                <BaseModal
                    show={showModal}
                    handleClose={handleCloseModal}>
                    <div className="flex flex-column align-items-center justify-content-center">
                        <h3>Editar datos de usuario</h3>
                        <UserForm
                            onInputChange={onInputChange}
                            formState={formState}
                            onSubmit={onSubmit}
                            errors={errors}
                        />
                    </div>
                </BaseModal>
            </div>
        </>
    );
};
