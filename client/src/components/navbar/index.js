import styled from 'styled-components';

const StyledNavbar = styled.nav`
    position: relative;
    letter-spacing: 1px;
    background: #234465;
    padding: 14px 0;
    color: white;
`;

const Navbar = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>;
};

export default Navbar;
