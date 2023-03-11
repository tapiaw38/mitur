import React from 'react';
import './TourLayout.scss';

export const TourLayout = ({ children }) => {
    return (
        <div className="container-tour area">
            {children}
        </div>
    );
};
