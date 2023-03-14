import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/store/auth/authSlice';
import {
    getUserProfile,
    registerWithEmailAndPassword,
    singInWithEmailAndPassword,
    singInWithGoogle,
    updateUserProfile,

} from '../../../store/auth/thunks'

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, status, userProfile, userCreated, errorMessage } = useSelector(
        (state) => state.auth
    );

    const onRegister = (form) => {
        dispatch(registerWithEmailAndPassword(form));
        if (userCreated?.status === 'created') {
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

    const onLogout = (error = null) => {
        dispatch(logout({ error }));
        navigate('/auth/login');
    };

    const getProfile = () => {
        dispatch(getUserProfile());
    };

    const updateUser = (user) => {
        dispatch(updateUserProfile(user));
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
        getProfile,
        updateUser,
        errorMessage
    };
};
