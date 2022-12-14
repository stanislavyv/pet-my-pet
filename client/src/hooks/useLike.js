import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectUserState } from '../features/auth/userSlice';

import { getPetById, likePet } from '../services/petService';

const useLike = (petId) => {
    const [state, setState] = useState({
        likes: 0,
        hasAlreadyLiked: false,
    });

    const { userInfo } = useSelector(selectUserState);

    useEffect(() => {
        getPetById(petId).then((pet) => {
            if (pet) {
                setState({
                    likes: pet.likes,
                    hasAlreadyLiked: pet.peopleLiked.includes(userInfo._id),
                });
            }
        });
    }, [petId, userInfo]);

    const toggleLike = () => {
        likePet(petId).then((pet) => {
            setState({
                likes: pet.likes,
                hasAlreadyLiked: pet.peopleLiked.includes(userInfo._id),
            });
        });
    };

    const value = useMemo(
        () => ({
            likes: state.likes,
            hasAlreadyLiked: state.hasAlreadyLiked,
            toggleLike,
        }),
        [state]
    );

    return value;
};

export default useLike;
