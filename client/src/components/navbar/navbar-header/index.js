import styled from 'styled-components';

import NavbarFirstBar from './navbar-first-bar';
import NavbarSecondBar from './navbar-second-bar';

const StyledNavbarHeader = styled.section`
    display: flex;
    justify-content: space-between;

    & ul {
        margin: 0 0.6rem;
        display: flex;
        align-items: center;
    }
`;

const NavbarHeader = () => {
    return (
        <StyledNavbarHeader>
            <NavbarFirstBar />
            <NavbarSecondBar />
        </StyledNavbarHeader>
    );
};

export default NavbarHeader;
