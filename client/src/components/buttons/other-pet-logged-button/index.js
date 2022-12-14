import { useSelector } from 'react-redux';
import { selectUserState } from '../../../features/auth/userSlice';

import PetButton from '../../buttons/pet-button';

const OtherPetLoggedButton = ({ id, parentCallback, hasAlreadyLiked }) => {
    const { isLoggedIn } = useSelector(selectUserState)

    return (
        <>
            {isLoggedIn && (
                <>
                    <PetButton
                        petId={id}
                        parentCallback={parentCallback}
                        hasAlreadyLiked={hasAlreadyLiked}
                    />
                </>
            )}
        </>
    );
};

export default OtherPetLoggedButton;
