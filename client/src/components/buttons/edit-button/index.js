import styled from 'styled-components';
import StyledLink from '../../shared/link';

const StyledEdit = styled(StyledLink)`
    padding: 0.6rem 1rem;
    && {
        margin-right: 0.45rem;
    }
`;

const EditButton = ({ id }) => {
    return <StyledEdit to={`/pets/${id}/edit`}>Edit</StyledEdit>;
};

export default EditButton;
