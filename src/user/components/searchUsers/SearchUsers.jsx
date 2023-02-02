import React from 'react';
import './search-users.scss';

export const SearchUsers = ({ search, handleSearchUsers }) => {
    return (
        <div className="flex flex-column search-users">
            <p>Buscar usuario</p>
            <input
                type="text"
                name="search"
                value={search}
                onChange={handleSearchUsers}
            />
        </div>
    );
};
