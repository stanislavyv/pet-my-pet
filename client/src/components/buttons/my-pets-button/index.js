import NavbarButton from '../../shared/navbar-link/navbar-button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserState } from '../../../features/auth/userSlice';

const MyPetsButton = () => {
    const navigate = useNavigate();
    const { userInfo } = useSelector(selectUserState);

    function onClickHandler() {
        const search = `?ownerid=${encodeURIComponent(userInfo._id)}`;
        navigate({ pathname: '/pets', search });
    }

    return <NavbarButton onClick={onClickHandler}>My Pets</NavbarButton>;
};

export default MyPetsButton;
