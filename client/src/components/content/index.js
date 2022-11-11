import styled from 'styled-components';
import { device } from '../../config/css';

const StyledContent = styled.div`
    overflow: hidden;

    /* 52px footer height, the rest is header */
    @media ${device.mobileS} {
        min-height: calc(100vh - (108px + 52px));
    }

    @media ${device.tablet} {
        min-height: calc(100vh - (135px + 52px));
    }

    @media ${device.laptop} {
        min-height: calc(100vh - (67px + 52px));
    }
`;

const Content = ({ children }) => {
    return <StyledContent>{children}</StyledContent>;
};

export default Content;
