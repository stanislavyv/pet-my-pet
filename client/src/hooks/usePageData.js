import { useReducer } from 'react';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'increment':
            return { ...state, currentPage: state.currentPage + 1 };
        case 'decrement':
            return { ...state, currentPage: state.currentPage - 1 };
        case 'setPage':
            return { ...state, currentPage: payload };
        case 'setCount':
            return { ...state, totalItemsCount: payload };
        default:
            return state;
    }
};

const usePageData = () => {
    const [pageData, dispatchPageData] = useReducer(reducer, {
        currentPage: 1,
        totalItemsCount: 1,
    });

    return [pageData, dispatchPageData];
};

export default usePageData;
