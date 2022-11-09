import { device } from '../../../../config/css';
import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import NavbarSecondBarLogged from './navbar-second-bar-logged';
import NavbarSecondBarAnon from './navbar-second-bar-anon';

const StyledNavbarSecondBar = styled.div`
    display: flex;
    align-items: center;

    li {
        margin: 0 0.25rem;
        text-align: center;
    }

    @media ${device.mobileS} {
        ul {
            flex-direction: column;
        }
    }

    @media ${device.laptop} {
        ul {
            flex-direction: row;
        }
    }
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
