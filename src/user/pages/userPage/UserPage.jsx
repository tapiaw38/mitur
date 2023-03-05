import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './user-page.scss';

import { useUsers } from '../../hooks/useUsers';
import { UserTable } from '../../components/userTable/UserTable';
import { Loader } from '../../../ui/components/loader/Loader';
import { SearchUsers } from '../../components/searchUsers/SearchUsers';

export const UserPage = () => {
    const { getAllUsers, users } = useUsers();

    const [search, setSearch] = useState('');

    const userItems = [
        '',
        'Nombre',
        'Apellido',
        'Email',
        'Teléfono',
        'Roles',
        'Estado',
        'Email verificado',
        'Ultima modificación',
        'Acciones'
    ];

    const handleSearchUsers = useCallback(
        (e) => setSearch(e.target.value),
        []
    );

    const filteredUsers = useMemo(
        () =>
            users.filter((user) => {
                return (
                    user.first_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    user.last_name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
            }),
        [users, search]
    );

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
                    <SearchUsers
                        search={search}
                        handleSearchUsers={handleSearchUsers}
                    />
                    <UserTable
                        userItems={userItems}
                        users={filteredUsers}
                    />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};
