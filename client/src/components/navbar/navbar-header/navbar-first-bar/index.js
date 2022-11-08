import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import NavbarLink from '../navbar-link';
import MyPetsButton from '../../../buttons/my-pets-button';

const StyledNavbarFirstBar = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarFirstBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <StyledNavbarFirstBar>
            <NavbarLink to="/pets">Dashboard</NavbarLink>
            <MyPetsButton />
            {isLoggedIn && (
                <>
                    <NavbarLink to="/pets/create">Add Pet</NavbarLink>
                </>
            )}
        </StyledNavbarFirstBar>
    );
};

export default NavbarFirstBar;
