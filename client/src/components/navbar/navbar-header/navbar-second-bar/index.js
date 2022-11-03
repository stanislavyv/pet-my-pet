import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import NavbarSecondBarLogged from './navbar-second-bar-logged';
import NavbarSecondBarAnon from './navbar-second-bar-anon';

const StyledNavbarSecondBar = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarSecondBar = () => {
    const { isLoggedIn, email } = useAuth();

    return (
        <StyledNavbarSecondBar>
            {isLoggedIn ? (
                <NavbarSecondBarLogged email={email} />
            ) : (
                <NavbarSecondBarAnon />
            )}
        </StyledNavbarSecondBar>
    );
};

export default NavbarSecondBar;
