import React from 'react';
import { useAuth } from '../../../auth/hooks/useAuth';
import './tour-page.scss';

export const TourPage = () => {
    const { status, user } = useAuth();
    return (
        <div className="container-tour-page">
            <div className="container-home">
                <h1>Mi Tur</h1>
                <p>
                    Conoce los destinos más visitados y disfruta de
                    momentos maravillosos!
                </p>
            </div>
        </div>
    );
};
