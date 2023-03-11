import React, { useState } from 'react';
import './UserMenu.scss';

import { UserMenuModal } from '../userMenuModal/UserMenuModal';

import { BsFillCaretDownFill } from 'react-icons/bs';

import profileIcon from '../../../assets/img/auth/profile.png';

export const UserMenu = ({ user, logout }) => {
    const [openUserMenu, setopenUserMenu] = useState(false);
    const toggleMenu = () => {
        setopenUserMenu(!openUserMenu);
    };

    return (
        <div className="user-menu">
            <div className="user-data flex flex-row justify-content-center align-items-center">
                <img
                    className="user-image"
                    src={
                        user?.picture ? user.picture
                            : profileIcon
                    }
                    alt={user.username}
                />
                <div
                    className="flex flex-row justify-content-center align-items-center"
                    onClick={toggleMenu}>
                    <span className="user-name">
                        {user.first_name}
                    </span>
                    <BsFillCaretDownFill
                        className={
                            'open-icon ' +
                            (openUserMenu ? '--open' : '')
                        }
                    />
                </div>
            </div>
            {openUserMenu && (
                <UserMenuModal
                    className="user-menu-modal"
                    user={user}
                    logout={logout}
                />
            )}
        </div>
    );
};
