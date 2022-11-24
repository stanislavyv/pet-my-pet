import styled from 'styled-components';
import { device } from '../../config/css';

import ButtonWrapper from './button-wrapper';
import TextWrapper from './text-wrapper';

const StyledPopUp = styled.section`
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 1px #00000030;
    border: 1px solid #00000026;

    font-weight: bold;
    width: 100%;

    position: fixed;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    justify-content: flex-start;
    align-items: center;

    @media ${device.mobileS} {
        max-width: 19rem;
        min-height: 11rem;
    }

    @media (min-width: 550px) {
        max-width: 26.6rem;
        min-height: 14.3rem;
    }
`;

const DeletePopUp = ({ id, setPopUp }) => {
    return (
        <StyledPopUp>
            <TextWrapper />
            <ButtonWrapper id={id} setPopUp={setPopUp} />
        </StyledPopUp>
    );
};

export default DeletePopUp;
