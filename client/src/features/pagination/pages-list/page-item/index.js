import styled from 'styled-components';
import classNames from 'classnames';

export const StyledPageItem = styled.li`
    padding: 0 0.75rem;
    height: 2rem;
    text-align: center;
    margin: auto 0.25rem;
    color: rgba(0, 0, 0, 0.87);
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 1.3rem;
    min-width: 2rem;

    &:hover {
        background-color: #68b1b36e;
        cursor: pointer;
    }

    &.selected {
        background-color: #68b1b36e;
    }

    &.disabled {
        pointer-events: none;

        &:hover {
            background-color: transparent;
            cursor: default;
        }
    }
`;

const PageItem = ({
    disabled = false,
    selected = false,
    onClick,
    children,
}) => {
    return (
        <StyledPageItem
            className={classNames({
                disabled,
                selected,
            })}
            onClick={onClick}
        >
            {children}
        </StyledPageItem>
    );
};

export default PageItem;
