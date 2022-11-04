import { useAuth } from '../../../contexts/AuthContext';

import PetButton from '../../buttons/pet-button';

const OtherPetLoggedButton = ({ id, parentCallback, hasAlreadyLiked }) => {
    const { isLoggedIn } = useAuth();

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
