import styled from 'styled-components';
import { Styled } from '../link';

export const StyledButton = styled(Styled)`
    padding: ${(props) => (props.link ? '0.6rem 0.87rem' : '0.6rem 1rem')};
    font-size: 1rem;

    &.selected {
        background: rgb(248, 215, 107);
        color: rgb(0, 0, 0);
    }

    &:active {
        background-color: rgb(246, 203, 60);
        transform: scale(0.97);
    }
`;

const Button = ({ children, onClick, type, link }) => {
    return (
        <StyledButton as="button" onClick={onClick} type={type} link={link}>
            {children}
        </StyledButton>
    );
};

export default Button;
