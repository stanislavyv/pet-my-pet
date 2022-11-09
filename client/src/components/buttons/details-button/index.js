import styled from 'styled-components';
import StyledLink from '../../shared/link';

const StyledDetails = styled(StyledLink)`
    padding: 0.6rem 1rem;
    && {
        margin-right: 0.45rem;
    }
`;

const DetailsButton = ({ id }) => {
    return <StyledDetails to={`/pets/${id}`}>Details</StyledDetails>;
};

export default DetailsButton;
