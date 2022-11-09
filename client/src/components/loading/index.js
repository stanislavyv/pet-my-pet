import styled from 'styled-components';
import Spinner from './spinner';

const StyledLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    backdrop-filter: blur(7px);
    width: 100vw;
    height: 100vh;
    z-index: 10;
`;

const Loading = () => {
    return (
        <StyledLoading>
            <Spinner />
        </StyledLoading>
    );
};

export default Loading;
