import styled from 'styled-components';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledPetOwnerLink = styled.p`
    margin: 0.55rem 0.6rem 0 0.6rem;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        font-weight: bold;
    }
`;

const PetOwnerLink = ({ creator }) => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        const search = `?ownerid=${encodeURIComponent(creator._id)}`;
        navigate({ pathname: '/pets', search });
    }, [creator]);

    return (
        <StyledPetOwnerLink onClick={onClick}>
            <span className="bold-span">Owner:</span> {creator.username}
        </StyledPetOwnerLink>
    );
};

export default PetOwnerLink;
