import React from "react";
import { Routes, Route } from "react-router-dom";


import { TourRoutes } from "../tour/routes/TourRoutes";
import { UserRoutes } from "../user/routes/UserRoutes";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";

import { useAuth } from "../modules/auth/hooks/useAuth";

import { Loader } from "../ui/components/loader/Loader";


export const AppRouter = () => {

  const { status } = useAuth();

  if ( status === 'checking' ) {
    return <Loader/>
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/*" element={<TourRoutes />} />
    </Routes>
  );
};
