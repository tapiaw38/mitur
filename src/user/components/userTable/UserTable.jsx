import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import { formatDate } from '../../../helpers/formatDate';

import './user-table.scss';

export const UserTable = ({ userItems, users }) => {
    const N0_ROLE_NEED = 'superadmin';

    return (
        <table className="rwd-table">
            <tbody>
                <tr>
                    {userItems.map((item) => {
                        return <th key={item}>{item}</th>;
                    })}
                </tr>
                {users.map((u) => {
                    if (u.roles) {
                        const hasRole = u.roles.some(
                            (r) => r.name === N0_ROLE_NEED
                        );
                        if (hasRole) {
                            return null;
                        }
                    }
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
                            <td>{u?.phone_number}</td>
                            <td>
                                {u.roles
                                    ? u.roles.map((r) => {
                                          return (
                                              <span
                                                  key={r.id}
                                                  className="role">
                                                  {r.name}
                                              </span>
                                          );
                                      })
                                    : 'Sin roles'}
                            </td>
                            <td>
                                {u.is_active ? 'Activo' : 'Bloqueado'}
                            </td>
                            <td>
                                {u.verified_email ? 'Verificado' : 'No verificado'}
                            </td>
                            <td>{formatDate(u.updated_at)}</td>
                            <td>
                                <button className="button-primary toggle-button">
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
