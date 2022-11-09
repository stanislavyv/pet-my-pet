import styled from 'styled-components';

import { useNotification } from '../../../contexts/NotificationContext';
import { deletePet } from '../../../utils/petService';

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 2.5rem;

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
`;

const ButtonWrapper = ({ id, setPopUp }) => {
    const { notifyInfo, notifyError } = useNotification();

    const onGoBackClick = () => {
        setPopUp(false);
    };

    const onDeleteClick = () => {
        try {
            deletePet(id);
            notifyInfo('Successfuly removed pet!');
            setPopUp(false);
        } catch (e) {
            notifyError(`Couldn't remove pet: ${e.message}`);
        }
    };

    return (
        <StyledWrapper>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onGoBackClick}>Go Back</button>
        </StyledWrapper>
    );
};

export default ButtonWrapper;
