import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Links.scss';

export const Links = ({ link }) => {
  const { to, title } = link;

  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? '--active' : '')}
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
};

Links.propTypes = {
  link: PropTypes.object,
};
