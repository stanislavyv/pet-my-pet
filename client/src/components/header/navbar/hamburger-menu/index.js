import { device } from '../../../../config/css';
import styled from 'styled-components';

const StyledHamburger = styled.button`
    margin: 0.2rem 0.8rem;
    min-width: 3rem;
    width: 100%;
    fill: #5f9ea0;
    transition: fill 0.2s ease-in-out;
    display: block;

    &:hover {
        fill: #f8d76b;
    }

    @media ${device.mobileS} {
        max-width: 4rem;
    }

    @media ${device.tablet} {
        max-width: 5rem;
    }

    @media ${device.laptop} {
        display: none;
    }
`;

const HamburgerMenu = ({ onClick }) => {
    return (
        <StyledHamburger onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 56 56"
                version="1.1"
                viewBox="0 0 56 56"
                xmlSpace="preserve"
            >
                <path d="M28 0C12.561 0 0 12.561 0 28s12.561 28 28 28 28-12.561 28-28S43.439 0 28 0zm12 41H16a2 2 0 010-4h24a2 2 0 010 4zm0-11H16a2 2 0 010-4h24a2 2 0 010 4zm0-11H16a2 2 0 010-4h24a2 2 0 010 4z"></path>
            </svg>
        </StyledHamburger>
    );
};

export default HamburgerMenu;
