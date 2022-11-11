import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import { SingInWithEmailAndPassword } from '../../store/auth/thunks';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);

    const onLogin = (form) => {
        dispatch(SingInWithEmailAndPassword(form));
        if (status === 'authenticated') {
            navigate('/');
        }
    };

    const onLogout = (errorMessage = null) => {
        dispatch(logout({ errorMessage }));
        navigate('/auth/login');
    };

    return {
        onLogin,
        onLogout,
        status,
        user
    };
};
