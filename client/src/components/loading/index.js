import styled from 'styled-components';
import { useEffect } from 'react';

import Spinner from './spinner';

const StyledLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    width: 100vw;
    z-index: 10;

    overflow: hidden;
    backdrop-filter: ${(props) =>
        props.type === 'auth' ? 'blur(7px)' : 'unset'};
    background-color: ${(props) =>
        props.type === 'auth' ? 'transparent' : 'white'};

    /* 52px is footer, which may be absent if the element is loaded at 
       the same time as DashboardPetsList*/
    min-height: ${(props) => (props.type === 'auth' ? '100vh' : 'inherit')};
`;

const Loading = ({ type }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <StyledLoading type={type}>
            <Spinner />
        </StyledLoading>
    );
};

export default Loading;
