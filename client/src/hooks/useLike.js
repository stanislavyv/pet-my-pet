import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';

import { getPetById, likePet } from '../utils/petService';

const useLike = (petId) => {
    const [likes, setLikes] = useState(0);
    const [hasAlreadyLiked, setHasAlreadyLiked] = useState(false);

    const { email, userId } = useAuth();

    useEffect(() => {
        getPetById(petId).then((pet) => {
            setLikes(pet.likes);
            setHasAlreadyLiked(pet?.peopleLiked.includes(userId));
        });
    }, [petId, userId, email]);

    const toggleLike = () => {
        likePet(petId).then((pet) => {
            setLikes(pet.likes);
            setHasAlreadyLiked(pet.peopleLiked.includes(userId));
        });
    };

    const value = useMemo(
        () => ({
            likes,
            hasAlreadyLiked,
            toggleLike,
        }),
        [hasAlreadyLiked, likes]
    );

    return value;
};

export default useLike;
