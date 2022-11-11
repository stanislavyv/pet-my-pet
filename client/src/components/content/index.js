import { usePromiseTracker } from 'react-promise-tracker';
import styled from 'styled-components';
import { device } from '../../config/css';

import Loading from '../loading';

const StyledContent = styled.div`
    overflow: hidden;
    --min-height: 100vh: 

    /* 52px footer height, the rest is header */ 
    @media
        ${device.mobileS} {
        --min-height: calc(100vh - (108px + 52px));
    }

    @media ${device.tablet} {
        --min-height: calc(100vh - (135px + 52px));
    }

    @media ${device.laptop} {
        --min-height: calc(100vh - (67px + 52px));
    }

    min-height: var(--min-height);
`;

const Content = ({ children }) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        <>
            <StyledContent>
                {promiseInProgress && <Loading type="petsList" />}
                {children}
            </StyledContent>
        </>
    );
};

export default Content;
