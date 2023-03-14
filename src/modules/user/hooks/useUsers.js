import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/user/thunks';

export const useUsers = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.user);

    const getAllUsers = () => {
        dispatch(getUsers());
    };

    return {
        getAllUsers,
        users
    };
};
