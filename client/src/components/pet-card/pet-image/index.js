import styled from 'styled-components';

const StyledImage = styled.div`
    width: 100%;
    height: 16.8rem;
    overflow: hidden;

    & {
        margin-bottom: 0.7rem;
    }

    & img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & img.pet-card-image {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`;

const PetImage = ({ url, className }) => {
    return (
        <StyledImage>
            <img src={url} alt="pet" className={className} />
        </StyledImage>
    );
};

export default PetImage;
