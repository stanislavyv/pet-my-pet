import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 5rem auto;
    max-width: 31.25rem;
    width: 100%;
`;

const Form = ({ children, onSubmitHandler }) => {
    return <StyledForm onSubmit={onSubmitHandler}>{children}</StyledForm>;
};

export default Form;
