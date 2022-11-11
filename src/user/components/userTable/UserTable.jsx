import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { formatDate } from '../../../helpers/formatDate';

import './user-table.scss';

export const UserTable = ({ userItems, users }) => {
    return (
        <table className="rwd-table">
            <tbody>
                <tr>
                    {userItems.map((item) => {
                        return <th key={item}>{item}</th>;
                    })}
                </tr>
                {users.map((u) => {
                    if (u.is_admin) return;
                    return (
                        <tr
                            key={u.id}
                            className={
                                !u.is_active ? 'row-deactivate' : null
                            }>
                            <td>
                                <AiOutlineUser />
                            </td>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td>{u.email}</td>
                            <td>{u.phone_number}</td>
                            <td>Partner</td>
                            <td>
                                {u.is_active ? 'Activo' : 'Bloqueado'}
                            </td>
                            <td>{formatDate(u.updated_at)}</td>
                            <td>
                                <button className="button-primary">
                                    {u.is_active
                                        ? 'Bloquear'
                                        : 'Activar'}
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
