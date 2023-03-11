import React from 'react';
import './SitesPage.scss';
import { Link } from 'react-router-dom';
import { listSites } from '../../../helpers/listSites';
import { SitesCard } from '../../components/sitesCard/SitesCard';

export const SitesPage = () => {
    return (
        <div className="section">
            <div className="sites-container">
                <div className="flex flex-row">
                    <h1 className="title-secondary-1">
                        Lugares relevantes de tu ciudad
                    </h1>
                </div>
                <div className="sites-list">
                    {listSites.map((site) => (
                        <Link to={`/sites/${site.id}`} key={site.id}>
                            <SitesCard sites={site} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
