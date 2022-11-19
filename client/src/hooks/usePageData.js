import { useReducer, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'increment':
            return { ...state, currentPage: state.currentPage + 1 };
        case 'decrement':
            return { ...state, currentPage: state.currentPage - 1 };
        case 'setPage':
            return { ...state, currentPage: payload };
        case 'reset': {
            return { ...state, currentPage: 1 };
        }
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
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams((state) => {
            state.set('page', pageData.currentPage);
            return state;
        });
    }, [pageData.currentPage]);

    return [pageData, dispatchPageData];
};

export default usePageData;
