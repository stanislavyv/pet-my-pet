import styled from 'styled-components';

const StyledNavbar = styled.nav`
    letter-spacing: 1px;
    background: #234465;
    padding: 0.87rem 0;
    color: white;
`;

const Navbar = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>;
};

export default Navbar;
