import styled from 'styled-components';
import { device } from '../../../../config/css';

import { useDispatch } from 'react-redux';

import {
    notifyInfo,
    notifyError,
} from '../../../notification/notificationSlice';
import { hideModal } from '../../modalsSlice';

import { deletePet } from '../../../../services/petService';

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;

    button {
        background-color: cadetblue;
        flex-grow: 1;
        color: white;
    }

    button:nth-child(1) {
        border-bottom-left-radius: 7px;
    }

    button:nth-child(2) {
        border-bottom-right-radius: 7px;
    }

    button:hover {
        background: rgb(248, 215, 107);
        color: rgb(0, 0, 0);
        font-weight: bold;
    }

    @media ${device.mobileS} {
        height: 2.3rem;
    }

    @media (min-width: 550px) {
        height: 2.5rem;
    }
`;

const DeletePopUpButtonWrapper = ({ id }) => {
    const dispatch = useDispatch();

    const onGoBackClick = () => {
        dispatch(hideModal());
    };

    const onDeleteClick = () => {
        deletePet(id)
            .then(() => {
                dispatch(notifyInfo('Successfuly removed pet!'));
            })
            .catch((e) => {
                dispatch(notifyError(`Couldn't remove pet: ${e.message}`));
            });

        dispatch(hideModal());
    };

    return (
        <StyledWrapper>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onGoBackClick}>Go Back</button>
        </StyledWrapper>
    );
};

export default DeletePopUpButtonWrapper;
