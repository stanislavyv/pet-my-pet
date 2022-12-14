import styled from 'styled-components';

const StyledWrapper = styled.section.attrs((props) => ({
    sizeWidth: props.bigger ? '26.25rem' : '20.6rem',
    sizeHeight: props.bigger ? '36.5rem' : '32.7rem',
    sizeFont: props.bigger ? '1.3rem' : '1rem',
}))`
    --font-size: ${(props) => props.sizeFont};

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: var(--font-size, 1rem);
    margin: 1.25rem 0.95rem;
    box-shadow: 0px 0px 12px 0 #b3b3b3;
    border-radius: 8px;

    max-width: ${(props) => props.sizeWidth};
    width: 100%;
    height: ${(props) => props.sizeHeight};

    & .pet-name {
        margin: 0.25rem 0.6rem 0 0.6rem;
    }

    & .pet-category {
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

    @media (min-width: 550px) and (max-width: 1024px) {
        --font-size: 1.3rem;
        max-width: 26.25rem;
        min-height: 36.5rem;
    }
`;

const PetCardWrapper = ({ as, children, bigger }) => {
    return (
        <StyledWrapper as={as ?? ''} bigger={bigger}>
            {children}
        </StyledWrapper>
    );
};

export default PetCardWrapper;
