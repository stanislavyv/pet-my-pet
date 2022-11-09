import React, { useContext, useMemo } from 'react';
import * as petService from '../../utils/petService';

import { useNotification } from '../NotificationContext';

const PetServiceContext = React.createContext({});
PetServiceContext.displayName = 'PetServiceContext';

// make custom Await component which takes data and component to load

const PetServiceProvider = ({ children }) => {
    const { notifyInfo, notifyError } = useNotification();

    const getAllPets = async () => {
        petService.getAllPets();
    };

    const value = useMemo(() => ({
        getAllPets,
    }));

    return <PetServiceContext.Provider value={value} children={children} />;
};

export const usePetService = () => useContext(PetServiceContext);
