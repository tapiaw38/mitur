import React from 'react';
import './tour-layout.scss';

export const TourLayout = ({ children }) => {
    return (
        <div className="container-tour area">
            {children}
        </div>
    );
};
