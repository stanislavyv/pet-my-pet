import styled from 'styled-components';

const StyledWrapper = styled.section.attrs((props) => ({
    size: props.otherDetails ? '26.25rem' : '20.6rem',
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.25rem 0.95rem;
    max-width: ${(props) => props.size};
    width: 100%;
    max-height: 36.5rem;
    box-shadow: 0px 0px 12px 0 #b3b3b3;
    border-radius: 8px;

    & .pet-name {
        margin: 0.25rem 0.6rem 0 0.6rem;
    }

    & .pet-category,
    & .pet-owner {
        margin: 0.55rem 0.6rem 0 0.6rem;
    }

    & .pet-counter {
        margin: 0.55rem;
    }

    & .pet-description {
        padding: 0.95rem 0.6rem;
        overflow: hidden;
        margin: 0.6rem;
        flex-grow: 1;
    }

    & p + button {
        margin: 0.45rem 0 0.95rem 0;
    }

    & .bold-span {
        font-weight: bold;
    }
`;

const PetCardWrapper = ({ as, children, otherDetails }) => {
    return (
        <StyledWrapper as={as ?? ''} otherDetails={otherDetails}>
            {children}
        </StyledWrapper>
    );
};

export default PetCardWrapper;
