import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { AuthRoute } from '../components/auth';
import { MePage } from '../pages/mePage/MePage';

export const AuthRoutes = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route
                    path="login"
                    element={
                        <AuthRoute>
                            <LoginPage />
                        </AuthRoute>
                    }
                />
                <Route path="/me" element={<MePage/>} />
                <Route
                    path="/*"
                    element={<Navigate to="/auth/login" />}
                />
            </Routes>
        </AuthLayout>
    );
};
