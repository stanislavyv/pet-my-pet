import { useNavigate } from 'react-router-dom';

import { logout } from '../../../utils/authService';

import NavbarButton from '../../navbar/navbar-header/navbar-link/navbar-btn';

const LogoutButton = () => {
    const navigate = useNavigate();

    const onLogoutClickHandler = () => {
        logout();
        navigate('/pets');
    };

    return (
        <NavbarButton onClickHandler={onLogoutClickHandler}>
            <i className="fas fa-sign-out-alt"></i> Logout
        </NavbarButton>
    );
};

export default LogoutButton;
