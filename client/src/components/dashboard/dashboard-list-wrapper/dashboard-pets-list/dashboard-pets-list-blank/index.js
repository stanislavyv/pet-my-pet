import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserState } from '../../../../../features/auth/userSlice';

import BlankPage from '../../../../shared/blank-page';

const DashboardPetsListBlank = () => {
    const { userInfo } = useSelector(selectUserState);
    const [searchParams] = useSearchParams();

    return (
        <>
            {searchParams.has('ownerid') ? (
                decodeURIComponent(searchParams.get('ownerid')) ===
                userInfo._id ? (
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
