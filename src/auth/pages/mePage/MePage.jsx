import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth';

export const MePage = () => {

    const { getProfile, userProfile: user } = useAuth();

    useEffect(() => {
        getProfile();
    }, []);

  return (
    <>
        <div className="button-back-container">
            <NavLink className="button-primary btn-back" to="/">
                Volver al Inicio 
            </NavLink>
        </div>
        <div className="flex row justify-content-center">
            <div className="card mt-4 justify-content-center">
                <img src={user?.picture} width="100" className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title color-white">{ user.first_name } { user.last_name }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div> 
    </>
  )
}
