import { checkingCredentials, login, logout } from './authSlice';
import { authApi } from '../../api/authApi';

export const checkingAuthentication = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};

export const SingInWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    try {
      const { data } = await authApi.post('/users/login', { email, password });
      dispatch(login(data.response));

      const { user, access_token } = data.response;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("status", "authenticated");
    } catch (error) {
      dispatch(logout({ errorMessage: error.response.data }));
    }
  };
};

