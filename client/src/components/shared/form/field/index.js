import styled from 'styled-components';

import toUpperCase from '../../../../utils/toUpperCase';
import AuthFieldInputWrapper from './auth-field-input-wrapper';
import FieldInputWrapper from './field-input-wrapper';

const StyledField = styled.div`
    margin-bottom: 0.6rem;

    & textarea,
    & input {
        border-radius: 8px;
        padding: 0.87rem;
        width: 100%;
        flex: 1 1 auto;
        border: 1px solid #ccc;
    }

    & textarea:focus,
    & input:focus {
        outline: none;
        border-color: #090;
    }

    & label {
        font-weight: bold;
    }

    & label[for='category'] {
        display: inline-block;
        margin-bottom: 0.31rem;
    }
`;

const Field = ({ children, type, auth }) => {
    return (
        <StyledField>
            <label htmlFor={type}>{toUpperCase(type)}</label>
            {auth ? (
                <AuthFieldInputWrapper>{children}</AuthFieldInputWrapper>
            ) : (
                <FieldInputWrapper>{children}</FieldInputWrapper>
            )}
        </StyledField>
    );
};

export default Field;
