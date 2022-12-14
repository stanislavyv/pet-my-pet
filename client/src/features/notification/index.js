import styled from 'styled-components';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectNotification, setInactive } from './notificationSlice';

import InfoNotification from './info-notification';
import ErrorNotification from './error-notification';

const StyledNotifications = styled.div`
    position: fixed;
    bottom: 7%;
    left: 9%;
    width: 80vw;
    margin: 0 auto;

    & div {
        border-radius: 9px;
        box-shadow: 0 5px 10px #cccccc;
        margin-top: 2%;
        margin-bottom: 2%;
        color: white;
        font-weight: 500;
        font-style: oblique;
        font-size: 1.5rem;
        text-decoration: underline;
        padding: 2%;
        text-align: center;
    }

    & .notification-info {
        background-color: rgba(1, 131, 29, 0.85);
    }

    & .notification-danger {
        background-color: rgba(238, 74, 74, 0.85);
    }
`;

const Notification = () => {
    const notification = useSelector(selectNotification);
    const dispatch = useDispatch();

    useEffect(() => {
        if (notification.isActive) {
            const timer = setTimeout(() => {
                dispatch(setInactive());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification.isActive]);

    return (
        <StyledNotifications>
            {notification.isActive &&
                (notification.type === 'info' ? (
                    <InfoNotification message={notification.message} />
                ) : (
                    <ErrorNotification message={notification.message} />
                ))}
        </StyledNotifications>
    );
};

export default Notification;
