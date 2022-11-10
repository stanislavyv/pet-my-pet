import { device } from '../../../../config/css';
import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';

import NavbarSecondBarLogged from './navbar-second-bar-logged';
import NavbarSecondBarAnon from './navbar-second-bar-anon';

const StyledNavbarSecondBarWrapper = styled.div`
    @media ${device.mobileS} {
        font-size: 1.3rem;

        && li,
        li a,
        li button {
            margin: 0 0.6rem;
        }

        ul {
            flex-direction: column;
        }
    }

    @media (min-width: 550px) {
        && li,
        li a,
        li button {
            font-size: 1.4rem;
        }

        ul {
            flex-direction: row;
        }
    }

    @media ${device.laptop} {
        && li,
        li a,
        li button {
            font-size: 1rem;
        }

        li {
            margin: 0;
        }
    }
`;

const NavbarSecondBarWrapper = () => {
    const { isLoggedIn, email } = useAuth();

    return (
        <StyledNavbarSecondBarWrapper>
            {isLoggedIn ? (
                <NavbarSecondBarLogged email={email} />
            ) : (
                <NavbarSecondBarAnon />
            )}
        </StyledNavbarSecondBarWrapper>
    );
};

export default NavbarSecondBarWrapper;
