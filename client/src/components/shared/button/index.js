import styled from 'styled-components';
import { Styled } from '../link';

export const StyledButton = styled(Styled)`
    padding: ${(props) => (props.link ? '6px 13px' : '10px 16px')};
    font-size: 1rem;
`;

const Button = ({ children, onClickHandler, type, link }) => {
    return (
        <StyledButton
            as="button"
            onClick={onClickHandler}
            type={type}
            link={link}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
