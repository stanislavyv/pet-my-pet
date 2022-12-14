import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUsernameById } from '../../../../../services/userService';

const DashboardPetsListHeader = () => {
    const [ownerUsername, setOwnerUsername] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const ownerId = searchParams.get('ownerid');
        if (ownerId) {
            getUsernameById(ownerId).then((un) => setOwnerUsername(un));
        }
    }, [searchParams]);

    return <>{ownerUsername ? <h1>{ownerUsername}'s pets</h1> : ''}</>;
};

export default DashboardPetsListHeader;
