import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import usePageData from '../../hooks/usePageData';
import { usePagination, DOTS } from '../../hooks/usePagination';

import PageItem from './page-item';
import PageArrow from './page-item/page-arrow';
import PageDots from './page-item/page-dots';

const StyledPagesList = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const PagesList = ({ count }) => {
    const [{ currentPage, totalItemsCount }, dispatchPageData] = usePageData();
    const [searchParams] = useSearchParams();
    const paginationRange = usePagination({
        currentPage,
        totalItemsCount,
    });

    useEffect(() => {
        dispatchPageData({ type: 'setCount', payload: count });

        if (!searchParams.get('page')) {
            dispatchPageData({ type: 'reset' });
        }
    }, [count]);

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        dispatchPageData({ type: 'increment' });
    };

    const onPrevious = () => {
        dispatchPageData({ type: 'decrement' });
    };

    const onPageClick = (pageNumber) => {
        dispatchPageData({ type: 'setPage', payload: pageNumber });
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <StyledPagesList>
            {/* Left navigation arrow */}
            <PageArrow left disabled={currentPage === 1} onClick={onPrevious} />

            {paginationRange.map((pageNumber, key) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <PageDots key={key} />;
                }

                // Render our Page Pills
                return (
                    <PageItem
                        selected={pageNumber === currentPage}
                        onClick={() => onPageClick(pageNumber)}
                        key={key}
                    >
                        {pageNumber}
                    </PageItem>
                );
            })}

            {/*  Right Navigation arrow */}
            <PageArrow
                right
                disabled={currentPage === lastPage}
                onClick={onNext}
            />
        </StyledPagesList>
    );
};

export default PagesList;
