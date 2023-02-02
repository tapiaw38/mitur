import { api } from '../../api/api';
import { setUsers, startLoadingUsers } from './userSlice';

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(startLoadingUsers());

        try {
            const { data } = await api.get('/users/list');
            dispatch(setUsers(data.response));
        } catch (error) {
            return;
        }
    };
};
