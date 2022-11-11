import styled from 'styled-components';
import { device } from '../../config/css';
import Spinner from './spinner';

const StyledLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    width: 100vw;
    z-index: 10;

    overflow: hidden;
    backdrop-filter: blur(7px);

    /* footer is 52px, the rest is header */
    @media ${device.mobileS} {
        min-height: ${(props) =>
            props.auth ? '100vh' : 'calc(100vh - (108px + 52px))'};
    }

    @media ${device.tablet} {
        min-height: ${(props) =>
            props.auth ? '100vh' : 'calc(100vh - (135px + 52px))'};
    }

    @media ${device.laptop} {
        min-height: ${(props) =>
            props.auth ? '100vh' : 'calc(100vh - (67px + 52px))'};
    }
`;

const Loading = ({ auth }) => {
    return (
        <StyledLoading auth={auth}>
            <Spinner />
        </StyledLoading>
    );
};

export default Loading;
