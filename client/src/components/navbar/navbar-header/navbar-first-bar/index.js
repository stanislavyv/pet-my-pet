import { device } from '../../../../config/css';
import styled from 'styled-components';

import { useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';

import NavbarLink from '../navbar-link';
import MyPetsButton from '../../../buttons/my-pets-button';
import HamburgerMenu from '../../hamburger-menu';
import NavbarFirstBarWrapper from './navbar-first-bar-wrapper';
import { useEffect } from 'react';

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

    useEffect(() => {
        if (isNavExpanded) {
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isNavExpanded]);

    return (
        <>
            <HamburgerMenu onClick={() => setIsNavExpanded(!isNavExpanded)} />
            <NavbarFirstBarWrapper isNavExpanded={isNavExpanded}>
                <StyledNavbarFirstBar>
                    <li onClick={() => setIsNavExpanded(!isNavExpanded)}>
                        <NavbarLink to="/pets">Dashboard</NavbarLink>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li
                                onClick={() => setIsNavExpanded(!isNavExpanded)}
                            >
                                <MyPetsButton />
                            </li>
                            <li
                                onClick={() => setIsNavExpanded(!isNavExpanded)}
                            >
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
