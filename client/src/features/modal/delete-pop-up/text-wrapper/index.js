import styled from 'styled-components';

const StyledWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        font-size: 1.5rem;
    }
`;

const TextWrapper = () => {
    return (
        <StyledWrapper>
            <p>Are you sure?</p>
        </StyledWrapper>
    );
};

export default TextWrapper;
