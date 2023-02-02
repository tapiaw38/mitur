import React from 'react';
import './tour-page.scss';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../auth/hooks/useAuth';

import logo from '../../../assets/img/mitur.png';
import smartwatch from '../../../assets/img/smartwatch.svg';
import mobileInterface from '../../../assets/img/mobile_interface.svg';

//home image
import home01 from '../../../assets/img/home/home01.jpg';
import home02 from '../../../assets/img/home/home02.jpg';
import home03 from '../../../assets/img/home/home03.jpg';
import home04 from '../../../assets/img/home/home04.jpg';

export const TourPage = () => {
    const navigate = useNavigate();
    const { status, user } = useAuth();

    const loginRedirect = () => {
        navigate('/auth/login');
    };

    const homeImages = [
        {
            img: home01,
            alt: 'home01'
        },
        {
            img: home02,
            alt: 'home02'
        },
        {
            img: home03,
            alt: 'home03'
        },
        {
            img: home04,
            alt: 'home04'
        }
    ];

    return (
        <div className="container-tour-page">
            <div className="hero">
                <div className="flex">
                    <img src={logo} alt="logo" />
                </div>
                {
                    status === 'not-authenticated' ? (
                        <div className="flex flex-row align-items-center buttons-container">
                            <button
                                className="button-secondary"
                                onClick={loginRedirect}>
                                Iniciar con Google
                            </button>
                            <button className="button-secondary">
                                Crear una cuenta
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row align-items-center buttons-container">
                            <h2 className="font-quicksand color-primary">
                                Bienvenido {user.first_name}
                            </h2>
                        </div>
                    )
                }
                
            </div>
            <div className="section-travel flex flex-column justify-content-center align-items-center">
                <div className="flex flex-row">
                    <img
                        src={mobileInterface}
                        alt="mobile-interface"
                    />
                    <div className="container-home flex flex-row justify-content-center align-itemns-center">
                        <p className="font-quicksand">
                            Encontra rapidamente los lugares mas
                            relevantes y hermosos para visitar, ademas
                            podras disfrutar los hoteles y locales mas
                            increibles.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section-experience flex flex-column justify-content-center align-items-center">
                <p className="font-quicksand">
                    Comenza a vivir momentos increibles y no te
                    pierdad ningun momento especial en tu estadia!
                </p>
                <div className="flex flex-row justify-content-center align-items-center carousel-container">
                    {homeImages.map((image) => (
                        <img
                            className="carousel-image"
                            src={image.img}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
            <div className="section-geolocation ripple-background flex flex-column justify-content-center">
                <div className="container-geolocation flex flex-row justify-content-center align-items-center">
                    <p className="font-quicksand">
                        Con la opcion de busqueda en el mapa
                        visualizaras tus lugares de interes mas
                        cercanos.
                    </p>
                    <img src={smartwatch} alt="smartwatch" />
                </div>
            </div>
        </div>
    );
};
