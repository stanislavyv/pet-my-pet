import { device } from '../../../../config/css';
import styled from 'styled-components';

const StyledCategoriesList = styled.ul`
    display: flex;

    & li {
        margin: 0 0.5rem;
    }

    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center;

        button {
            margin: 0.6rem;
        }
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const CategoriesList = ({ children }) => {
    return <StyledCategoriesList>{children}</StyledCategoriesList>;
};

export default CategoriesList;
