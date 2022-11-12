import { device } from '../../../../config/css';
import styled from 'styled-components';

const StyledCategoriesList = styled.ul`
    @media ${device.mobileS} {
        &&.expanded {
            display: flex;
        }

        flex-direction: column;
        display: none;
        position: relative;
        width: 9.8rem;

        li {
            border: 1px solid white;
            margin: 0;
        }

        li button {
            width: 100%;
            text-align: center;
        }
    }

    @media ${device.laptop} {
        display: flex;
        flex-direction: row;
        width: auto;

        li {
            border: none;
            margin: 0 0.5rem;
        }

        li button {
            width: auto;
        }
    }
`;

const CategoriesList = ({ children, isExpanded }) => {
    return (
        <StyledCategoriesList className={isExpanded ? 'expanded' : ''}>
            {children}
        </StyledCategoriesList>
    );
};

export default CategoriesList;
