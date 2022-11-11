import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

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
                            style={
                                !u.is_active
                                    ? {
                                          backgroundColor: '#e71c48',
                                          color: 'white'
                                      }
                                    : null
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
                            <td>{u.updated_at}</td>
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
