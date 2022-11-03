import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../contexts/AuthContext';

import { hasUserLikedPet } from '../utils/petService';

const useLike = (petId, initialLikes) => {
    const [likes, setLikes] = useState(initialLikes);
    const [hasAlreadyLiked, setHasAlreadyLiked] = useState(false);

    const { email, isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            hasUserLikedPet(petId, email).then((res) => {
                setHasAlreadyLiked(res);
            });
        }
    }, [petId, email, isLoggedIn]);

    const toggleLike = (newLikes, newHasAlreadyLiked) => {
        setLikes(newLikes);
        setHasAlreadyLiked(newHasAlreadyLiked);
    };

    const value = useMemo(
        () => ({
            likes,
            hasAlreadyLiked,
            toggleLike,
        }),
        [hasAlreadyLiked]
    );

    return value;
};

export default useLike;
