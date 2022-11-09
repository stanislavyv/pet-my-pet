import { ColorRing } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <ColorRing
            visible={true}
            height="9rem"
            width="9rem"
            ariaLabel="blocks-loading"
            colors={['#4180be', '#346698', '#3b73ab', '#548cc4', '#6799cb']}
        />
    );
};

export default Spinner;
