const getSearchQuery = (searchObj) => {
    let endpoint = '';

    if (searchObj) {
        const { type, data } = searchObj;
        endpoint = `?${type.toLowerCase()}=${String(data)}`;

        // If array:
        // let i = 0;

        // endpoint += '?';

        // for (const { type, data } of searchArr) {
        //     endpoint += `${type.toLowerCase()}=${String(data).toLowerCase()}`;
        //     if (i++ < searchArr.length) {
        //         endpoint += '&';
        //     }
        // }
    }

    return endpoint;
};

export default getSearchQuery;
