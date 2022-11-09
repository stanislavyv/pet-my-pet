import { device } from '../../../../config/css';
import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import NavbarLink from '../navbar-link';
import MyPetsButton from '../../../buttons/my-pets-button';

const StyledNavbarFirstBar = styled.ul`
    @media ${device.mobileS} {
        flex-direction: column;
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const NavbarFirstBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <StyledNavbarFirstBar>
            <NavbarLink to="/pets">Dashboard</NavbarLink>
            {isLoggedIn && (
                <>
                    <MyPetsButton />
                    <NavbarLink to="/pets/create">Add Pet</NavbarLink>
                </>
            )}
        </StyledNavbarFirstBar>
    );
};

export default NavbarFirstBar;
