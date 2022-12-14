import styled from 'styled-components';
import { device } from '../../../config/css';

import { useSelector } from 'react-redux';
import { selectUserState } from '../../auth/userSlice';

import MyPetCard from '../pet-card/my-pet-card';
import OtherPetCard from '../pet-card/other-pet-card';

const StyledPetsList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
    align-items: stretch;

    @media ${device.mobileS} {
        flex-direction: column;
    }

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-around;
        max-width: 1100px;
    }

    @media ${device.laptopL} {
        max-width: 1620px;
    }
`;

const PetsList = ({ pets }) => {
    const { isLoggedIn, userInfo } = useSelector(selectUserState);

    return (
        <StyledPetsList>
            {pets.map((pet) => {
                if (isLoggedIn) {
                    return pet.creator.email.toLowerCase() ===
                        userInfo.email.toLowerCase() ? (
                        <MyPetCard key={pet._id} {...pet} />
                    ) : (
                        <OtherPetCard key={pet._id} {...pet} />
                    );
                }

                return <OtherPetCard key={pet._id} {...pet} />;
            })}
        </StyledPetsList>
    );
};

export default PetsList;
