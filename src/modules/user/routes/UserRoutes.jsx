import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/partials/navBar/Navbar'
import { UserLayout } from '../layout/UserLayout'
import { UserPage } from '../pages/userPage/UserPage'

export const UserRoutes = () => {
  return (
    <>
        <Navbar/>
        <UserLayout>
            <Routes>
                <Route path='/' element={ <UserPage/> } />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </UserLayout>
    </>
  )
}
