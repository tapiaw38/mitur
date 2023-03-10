import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import {
    getUserProfile,
    registerWithEmailAndPassword,
    singInWithEmailAndPassword,
    singInWithGoogle
} from '../../store/auth/thunks';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, status, userProfile, userCreated } = useSelector(
        (state) => state.auth
    );

    const onRegister = (form) => {
        dispatch(registerWithEmailAndPassword(form));
        if (userCreated) {
            navigate('/auth/login');
        }
    };

    const onLogin = (form) => {
        dispatch(singInWithEmailAndPassword(form));
        if (status === 'authenticated') {
            navigate('/');
        }
    };

    const onGoogleLogin = (sso_type, code) => {
        dispatch(singInWithGoogle(sso_type, code));
    };

    const onLogout = (errorMessage = null) => {
        dispatch(logout({ errorMessage }));
        navigate('/auth/login');
    };

    const getProfile = () => {
        dispatch(getUserProfile());
    };

    return {
        onRegister,
        onLogin,
        onGoogleLogin,
        onLogout,
        status,
        user,
        userCreated,
        userProfile,
        getProfile
    };
};
