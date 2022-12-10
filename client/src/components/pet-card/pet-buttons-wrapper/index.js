import styled from 'styled-components';

const StyledPetInfo = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding-bottom: 1rem;

    & button,
    & a {
        margin: 0 0.12rem;
    }
`;

const PetButtonsWrapper = ({ children }) => {
    return <StyledPetInfo>{children}</StyledPetInfo>;
};

export default PetButtonsWrapper;
