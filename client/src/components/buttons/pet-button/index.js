import Button from '../../shared/button';

const PetButton = ({ parentCallback, hasAlreadyLiked }) => {
    const onPetClickHandler = async () => {
        parentCallback();
    };

    return (
        <Button onClickHandler={onPetClickHandler}>
            <i className="fas fa-heart"></i> {hasAlreadyLiked ? 'Unpet' : 'Pet'}
        </Button>
    );
};

PetButton.displayName = 'PetButton';
export default PetButton;
