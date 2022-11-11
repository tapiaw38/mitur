import React from 'react';
import PropTypes from 'prop-types';
import './sites-card.scss';

export const SitesCard = ({ sites }) => {
  const { title, description, image, city } = sites;
  return (
    <div className="card">
      <div className="card-body">
        <div
          className="card-image"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <p className="card-city">{city}</p>
      </div>
    </div>
  );
};

SitesCard.propTypes = {
  sites: PropTypes.object,
};
