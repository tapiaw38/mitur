import { checkingCredentials, login, logout, setUserProfile, setUserCreated, setError } from './authSlice';
import { authApi } from '../../api/authApi';
import { api } from '../../api/api';


export const checkingAuthentication = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};

export const registerWithEmailAndPassword = ({ first_name, last_name, username, email, password }) => {
  return async dispatch => {
    try {
      const { data } = await authApi.post('/auth/signup', { first_name, last_name, username, email, password });
      dispatch(setUserCreated({
        status: 'created',
        ...data.response
      }));
    }
    catch (error) {
      dispatch(setError(error?.response?.data?.message));
    }
  };
};

export const singInWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    try {
      const { data } = await authApi.post('/auth/login', { email, password });
      dispatch(login(data.response));

      const { user, token } = data.response;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("status", "authenticated");
    } catch (error) {
      dispatch(logout({ errorMessage: error?.response?.data?.message}));
    }
  };
};

export const singInWithGoogle = (sso_type, code) => {
  return async dispatch => {
    dispatch(checkingCredentials());
    try {
      const { data } = await authApi.post('/auth/login', { sso_type, code });
      dispatch(login(data.response));

      const { user, token } = data.response;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("status", "authenticated");
    } catch (error) {
      dispatch(logout({ errorMessage: error?.response?.data?.message}));
    }
  };
};

export const getUserProfile = () => {
  return async dispatch => {
    try {
      const { data } = await api.get('/users/me');
      dispatch(setUserProfile(data.response));
    } catch (error) {
      dispatch(setError(error?.response?.data?.message));
    }
  };
}

export const updateUserProfile = (user) => {
  return async dispatch => {
    try {
      const { data } = await api.put(`/users/${user.id}`, user);
      dispatch(setUserProfile(data.response));
    } catch (error) {
      dispatch(setError(error?.response?.data?.message));
    }
  };
}