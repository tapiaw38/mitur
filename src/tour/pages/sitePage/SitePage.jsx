import React from 'react';
import { useParams } from 'react-router-dom';
import { listSites } from '../../../helpers/listSites';
import './SitePage.scss';

export const SitePage = () => {
  const { id } = useParams();
  const site = listSites.find(s => s.id == id)

  return (
    <div className='section container-site'>
        <h1>{site?.title} | { site.city }</h1>
        <img src={site?.image} alt={site.slug} />
        <p>{site?.description}</p>
    </div>
  );
};
