import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 1px solid #666;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
    padding: 2.5rem 2rem 1rem 2rem;
    position: relative;

    & button {
        margin-top: 0.5rem;
        align-self: center;
    }
`;

const Fieldset = ({ children }) => {
    return <StyledFieldset>{children}</StyledFieldset>;
};

export default Fieldset;
