import { device } from '../../../../../config/css';
import styled from 'styled-components';

const StyledNavbarFirstBarWrapper = styled.div`
    @media ${device.mobileS} {
        &&.expanded {
            display: block;
        }

        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh);
        display: none;
        background-color: rgb(240 246 255 / 93%);
    }

    @media ${device.laptop} {
        display: block;
        position: static;
        height: auto;
        width: auto;
        background-color: transparent;
    } ;
`;

const NavbarFirstBarWrapper = ({ children, isNavExpanded, onClick }) => {
    return (
        <StyledNavbarFirstBarWrapper
            className={isNavExpanded ? 'expanded' : ''}
            onClick={onClick}
        >
            {children}
        </StyledNavbarFirstBarWrapper>
    );
};

export default NavbarFirstBarWrapper;
