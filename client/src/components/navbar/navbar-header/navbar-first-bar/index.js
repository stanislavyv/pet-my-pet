import { device } from '../../../../config/css';
import styled from 'styled-components';

import { useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';

import NavbarLink from '../navbar-link';
import MyPetsButton from '../../../buttons/my-pets-button';
import HamburgerMenu from '../../hamburger-menu';
import NavbarFirstBarWrapper from './navbar-first-bar-wrapper';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const StyledNavbarFirstBar = styled.ul`
    @media ${device.mobileS} {
        margin: 0;

        li {
            border-bottom: 2px solid #234465;
            width: 100%;
        }

        a,
        button {
            font-size: 1.7rem;
            color: #234465;
        }

        flex-direction: column;
    }

    @media ${device.laptop} {
        margin: inherit;

        li {
            border: none;
            width: auto;
        }

        a,
        button {
            color: white;
            font-size: inherit;
        }

        flex-direction: row;
    }
`;

const NavbarFirstBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        minimizeNav();
    }, [location]);

    useEffect(() => {
        if (isNavExpanded) {
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isNavExpanded]);

    // for list items - to close the modal onClick but keep the body scrolling
    const minimizeNav = () => {
        if (isNavExpanded) {
            setIsNavExpanded(false);
        }
    };

    return (
        <>
            <HamburgerMenu onClick={() => setIsNavExpanded(!isNavExpanded)} />
            <NavbarFirstBarWrapper
                onClick={minimizeNav}
                isNavExpanded={isNavExpanded}
            >
                <StyledNavbarFirstBar>
                    <li>
                        <NavbarLink
                            to="/pets"
                            onClick={() => setSearchParams()}
                        >
                            Dashboard
                        </NavbarLink>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <MyPetsButton />
                            </li>
                            <li>
                                <NavbarLink to="/pets/create">
                                    Add Pet
                                </NavbarLink>
                            </li>
                        </>
                    )}
                </StyledNavbarFirstBar>
            </NavbarFirstBarWrapper>
        </>
    );
};

export default NavbarFirstBar;
