import styled from 'styled-components';
import ButtonWrapper from './button-wrapper';
import TextWrapper from './text-wrapper';

const StyledPopUp = styled.section`
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 1px #00000030;
    border: 1px solid #00000026;

    font-weight: bold;
    min-width: 12.5rem;
    max-width: 26.6rem;
    width: 100%;

    height: 14.3rem;
    position: fixed;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    justify-content: flex-start;
    align-items: center;
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
