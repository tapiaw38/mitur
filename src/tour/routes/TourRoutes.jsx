import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SitesPage } from '../pages/sitesPage/SitesPage';
import { Navbar } from '../../ui/partials/navBar/Navbar';
import { TourPage } from '../pages/tourPage/TourPage';
import { SitePage } from '../pages/sitePage/SitePage';
import { TourLayout } from '../layouts/TourLayout';

export const TourRoutes = () => {
  return (
    <>
      <Navbar />
      <TourLayout>
        <Routes>
          <Route path="/" element={<TourPage />} />
          <Route path="/sites" element={<SitesPage />} />
          <Route path="/sites/:id" element={<SitePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </TourLayout>
    </>
  );
};
