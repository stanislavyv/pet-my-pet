import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../../features/auth/userSlice';

import NavbarButton from '../../shared/navbar-link/navbar-button';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutClickHandler = () => {
        dispatch(logoutUser());
        navigate('/pets');
    };

    return (
        <NavbarButton onClick={onLogoutClickHandler}>
            <i className="fas fa-sign-out-alt"></i> Logout
        </NavbarButton>
    );
};

export default LogoutButton;
