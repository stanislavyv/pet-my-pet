import styled from 'styled-components';

import NavbarLink, { StyledNavbarLink } from '../../navbar-link';

const StyledSecondBarAnon = styled.section`
    & li {
        margin: 0 4px;
    }
`;

const NavbarSecondBarAnon = () => {
    return (
        <StyledSecondBarAnon>
            <ul>
                <li>
                    <NavbarLink to="/register">
                        <i className="fas fa-user-plus"></i> Register
                    </NavbarLink>
                </li>
                <li>
                    <NavbarLink to="/login">
                        <i className="fas fa-sign-in-alt"></i> Login
                    </NavbarLink>
                </li>
            </ul>
        </StyledSecondBarAnon>
    );
};

export default NavbarSecondBarAnon;
