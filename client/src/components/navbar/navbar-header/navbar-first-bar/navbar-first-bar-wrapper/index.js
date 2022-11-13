import { device } from '../../../../../config/css';
import styled from 'styled-components';

const StyledNavbarFirstBarWrapper = styled.div`
    @media ${device.mobileS} {
        &&.expanded {
            display: block;
        }

        position: absolute;
        z-index: 9;
        top: 101px;
        left: 0;
        width: 100%;
        height: calc(100vh);
        display: none;
        background-color: white;
    }

    @media (min-width: 360px) and (max-width: 425px) {
        top: 80px;
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
