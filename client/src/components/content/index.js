import styled from 'styled-components';
import { device } from '../../config/css';

const StyledContent = styled.div`
    overflow: hidden;

    /* 52px footer height, the rest is header */
    @media ${device.mobileS} {
        --content-height: calc(100vh - (108px + 52px));
    }

    @media ${device.tablet} {
        --content-height: calc(100vh - (135px + 52px));
    }

    @media ${device.laptop} {
        --content-height: calc(100vh - (67px + 52px));
    }

    min-height: var(--content-height, 100vh);
`;

const Content = ({ children }) => {
    return (
        <>
            <StyledContent>{children}</StyledContent>
        </>
    );
};

export default Content;
