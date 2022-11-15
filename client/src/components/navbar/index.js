import styled from 'styled-components';
import { device } from '../../config/css';

const StyledNavbar = styled.nav`
    position: relative;
    letter-spacing: 1px;
    background: #234465;
    padding: 14px 0;
    color: white;

    @media ${device.mobileS} {
        --navbar-height: 98px;
    }

    @media (min-width: 357px) {
        --navbar-height: 93px;
    }

    @media (min-width: 425px) {
        --navbar-height: 103px;
    }

    @media ${device.tablet} {
        --navbar-height: 119px;
    }
`;

const Navbar = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>;
};

export default Navbar;
