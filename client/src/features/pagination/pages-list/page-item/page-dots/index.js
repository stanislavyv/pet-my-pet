import styled from 'styled-components';
import { StyledPageItem } from '..';

const StyledPageDots = styled(StyledPageItem)`
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`;

const PageDots = () => {
    return <StyledPageDots>&#8230;</StyledPageDots>;
};

export default PageDots;
