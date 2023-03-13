import React, { useEffect } from 'react';
import { useAuth } from '../../../auth/hooks/useAuth';
import { listLinks } from '../../../helpers/listLinks';
import { Links } from '../../components/links/Links';
import { UserMenu } from '../../components/userMenu/UserMenu';
import './Navbar.scss';

export const Navbar = () => {
  const { onLogout, status, userProfile: user, getProfile } = useAuth();

  const logout = e => {
    e.preventDefault();
    onLogout();
  };

  useEffect(() => {
    getProfile();
  }, [])
  

  return (
    <div className="container">
      <nav>
        <div className="logo">Mitur</div>
        <ul className='font-roboto'>
          {listLinks.map(link => {
            if (
              link.publicOnly &&
              status === 'authenticated' &&
              link.slug !== 'login'
            )
              return null;
            if (link.private && status === 'not-authenticated') return null;

            return status === 'authenticated' && link.slug === 'login' ? (
              <li key={link.slug}>
                <UserMenu user={user} logout={logout} />
              </li>
            ) : (
              <Links link={link} key={link.slug}></Links>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
