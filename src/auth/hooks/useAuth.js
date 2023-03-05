import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import { getUserProfile, SingInWithEmailAndPassword, SingInWithGoogle } from '../../store/auth/thunks';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, status, userProfile } = useSelector((state) => state.auth);

    const onLogin = (form) => {
        dispatch(SingInWithEmailAndPassword(form));
        if (status === 'authenticated') {
            navigate('/');
        }
    };

    const onGoogleLogin = (sso_type,code) => {
        dispatch(SingInWithGoogle(sso_type,code));
    };

    const onLogout = (errorMessage = null) => {
        dispatch(logout({ errorMessage }));
        navigate('/auth/login');
    };

    const getProfile = () => {
        dispatch(getUserProfile());
    };

    return {
        onLogin,
        onGoogleLogin,
        onLogout,
        status,
        user,
        userProfile,
        getProfile,
    };
};
