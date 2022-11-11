import { device } from '../../../../../config/css';
import styled from 'styled-components';

const StyledNavbarFirstBarWrapper = styled.div`
    @media ${device.mobileS} {
        &&.expanded {
            display: block;
        }

        position: absolute;
        top: 101px;
        left: 0;
        z-index: 1;
        width: 100%;
        height: calc(100vh);
        display: none;
        background-color: white;
    }

    @media ${device.tablet} {
        top: 121px;
    }

    @media ${device.laptop} {
        display: block;
        position: static;
        height: auto;
        width: auto;
        background-color: transparent;
    } ;
`;

const NavbarFirstBarWrapper = ({ children, isNavExpanded }) => {
    return (
        <StyledNavbarFirstBarWrapper
            className={isNavExpanded ? 'expanded' : ''}
        >
            {children}
        </StyledNavbarFirstBarWrapper>
    );
};

export default NavbarFirstBarWrapper;
