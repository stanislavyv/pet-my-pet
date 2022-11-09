import styled from 'styled-components';

const StyledInputError = styled.span`
    color: red;
    font-weight: bold;
    font-size: 0.87rem;
`;

const InputError = ({ message }) => {
    return <StyledInputError className="error">{message}</StyledInputError>;
};

export default InputError;
