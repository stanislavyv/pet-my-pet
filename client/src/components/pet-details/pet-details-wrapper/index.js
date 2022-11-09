import styled from 'styled-components';

const StyledPetDetailsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.25rem 0;
`;

const PetDetailsWrapper = ({ children }) => {
    return <StyledPetDetailsWrapper>{children}</StyledPetDetailsWrapper>;
};

export default PetDetailsWrapper;
