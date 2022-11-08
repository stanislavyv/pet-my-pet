import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarLink = styled(Link)`
    margin: 10px;
    padding: 0;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        transform: scale(0.97);
    }
`;

const NavbarLink = ({ to, children }) => {
    return <StyledNavbarLink to={to}>{children}</StyledNavbarLink>;
};

export default NavbarLink;
