import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../../../contexts/AuthContext';

import BlankPage from '../../../../shared/blank-page';

const DashboardPetsListBlank = () => {
    const { userId } = useAuth();
    const [searchParams] = useSearchParams();

    return (
        <>
            {searchParams.has('ownerid') ? (
                decodeURIComponent(searchParams.get('ownerid')) === userId ? (
                    <BlankPage header="You haven't added any pets yet..." />
                ) : (
                    <BlankPage header="This user doesn't have any pets yet..." />
                )
            ) : (
                <BlankPage header="Nothing to see here..." />
            )}
        </>
    );
};

export default DashboardPetsListBlank;
