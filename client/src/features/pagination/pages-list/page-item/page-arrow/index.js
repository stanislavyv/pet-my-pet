import styled from 'styled-components';
import { StyledPageItem } from '..';

const StyledArrow = styled(StyledPageItem)`
    &::before {
        position: relative;
        top: -1pt;
        left: ${(props) => (props.left ? '1pt' : '-1pt')};
        content: '';
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
        transform: ${(props) =>
            props.left ? 'rotate(-135deg)' : 'rotate(45deg)'};
    }

    &.disabled::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
`;

const PageArrow = ({ left, disabled = false, onClick }) => {
    return (
        <StyledArrow
            left={left}
            className={disabled ? 'disabled' : ''}
            onClick={onClick}
        />
    );
};

export default PageArrow;
