import { device } from '../../../../config/css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarLink = styled(Link)`
    @media ${device.mobileS} {
        text-align: center;
        margin: 0.6rem 0;
        width: 100%;
    }

    @media ${device.laptop} {
        margin: 0.6rem;
        width: auto;

        &:hover {
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.97);
        }
    }
`;

const NavbarLink = ({ to, children, onClick }) => {
    return (
        <StyledNavbarLink to={to} onClick={onClick}>
            {children}
        </StyledNavbarLink>
    );
};

export default NavbarLink;
