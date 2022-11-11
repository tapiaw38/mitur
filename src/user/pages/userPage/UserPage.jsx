import React, { useEffect, useState } from 'react';
import './user-page.scss';

import { useUsers } from '../../hooks/useUsers';
import { UserTable } from '../../components/userTable/UserTable';
import { Loader } from '../../../ui/components/loader/Loader';

export const UserPage = () => {
    const { getAllUsers, users } = useUsers();

    const [search, setSearch] = useState('');

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

    const handleSearchUsers = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.first_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            user.last_name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    });

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
                    <div className="flex flex-column search-users">
                        <p>Buscar usuario</p>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={handleSearchUsers}
                        />
                    </div>
                    <UserTable userItems={userItems} users={filteredUsers} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};
