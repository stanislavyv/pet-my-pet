import NavbarButton from '../../navbar/navbar-header/navbar-link/navbar-btn';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const MyPetsButton = () => {
    const navigate = useNavigate();
    const { userId } = useAuth();

    function onClickHandler() {
        const search = `?ownerid=${encodeURIComponent(userId)}`;
        navigate({ pathname: '/pets', search });
    }

    return <NavbarButton onClick={onClickHandler}>My Pets</NavbarButton>;
};

export default MyPetsButton;
