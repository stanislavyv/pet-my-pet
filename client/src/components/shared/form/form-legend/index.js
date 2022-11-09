import styled from 'styled-components';

const StyledFormLegend = styled.legend`
    position: absolute;
    left: -0.06rem;
    top: -1.31rem;
    border: 1px solid #666;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
    width: 30%;
    padding: 0.5rem 1rem;
`;

const FormLegend = ({ children }) => {
    return <StyledFormLegend>{children}</StyledFormLegend>;
};

export default FormLegend;
