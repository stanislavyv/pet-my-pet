import styled from 'styled-components';
import { device } from '../../../../config/css';
import { StyledButton } from '../../../shared/button';

const StyledCategoryButton = styled(StyledButton)`
    position: relative;

    &:active {
        transform: none;
    }

    @media ${device.mobileS} {
        display: block;
    }

    @media ${device.laptop} {
        display: none;
    }
`;

const CategoryButton = ({ onClick }) => {
    return (
        <StyledCategoryButton as="button" onClick={onClick}>
            Categories
        </StyledCategoryButton>
    );
};

export default CategoryButton;
