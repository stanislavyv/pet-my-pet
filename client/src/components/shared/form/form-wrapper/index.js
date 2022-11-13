import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    height: var(--content-height + 10vh, 100vh);
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = ({ children }) => {
    return <StyledFormWrapper>{children}</StyledFormWrapper>;
};

export default FormWrapper;
