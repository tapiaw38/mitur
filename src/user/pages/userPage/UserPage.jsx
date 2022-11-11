import React, { useEffect } from 'react';
import './user-page.scss';

import { useUsers } from '../../hooks/useUsers';
import { UserTable } from '../../components/userTable/UserTable';
import { Loader } from '../../../ui/components/loader/Loader';

export const UserPage = () => {
    const { getAllUsers, users } = useUsers();

    const userItems = [
        '',
        'Nombre',
        'Apellido',
        'Email',
        'Teléfono',
        'Tipo de usuario',
        'Estado',
        'Ultima modificación',
        'Acciones'
    ];

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="section">
            {users.length ? (
                <div className="user-container">
                    <h1 className="title-secondary-1">
                        Usuarios registrados
                    </h1>
                    <UserTable userItems={userItems} users={users} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};
