import { device } from '../../../../../config/css';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectUserState } from '../../../../../features/auth/userSlice';

import NavbarSecondBarLogged from './navbar-second-bar-logged';
import NavbarSecondBarAnon from './navbar-second-bar-anon';

const StyledNavbarSecondBar = styled.div`
    @media ${device.mobileS} {
        li {
            margin: 0 0.6rem;
        }

        li:first-of-type {
            margin-bottom: 0.5rem;
        }

        li a,
        li button {
            margin: 0 !important;
        }

        && li,
        li a,
        li button {
            font-size: 1.3rem;
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

        li:first-of-type {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }
    }

    @media ${device.laptop} {
        && li,
        li a,
        li button {
            font-size: inherit;
        }

        li {
            margin: inherit;
        }

        li a,
        li button {
            margin: inherit !important;
        }
    }
`;

const NavbarSecondBar = () => {
    const { isLoggedIn, userInfo } = useSelector(selectUserState);

    return (
        <StyledNavbarSecondBar>
            {isLoggedIn ? (
                <NavbarSecondBarLogged username={userInfo.username} />
            ) : (
                <NavbarSecondBarAnon />
            )}
        </StyledNavbarSecondBar>
    );
};

export default NavbarSecondBar;
