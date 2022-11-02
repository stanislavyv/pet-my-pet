import styled from 'styled-components';

const StyledLoading = styled.div`
    position: absolute;
    backdrop-filter: blur(7px);
    width: 100vw;
    height: 2500px;
    z-index: 10;
`;

const Loading = () => {
    return <StyledLoading />;
};

export default Loading;
