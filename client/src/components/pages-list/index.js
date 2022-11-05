import React from 'react';
import styled from 'styled-components';

import { usePagination, DOTS } from '../../hooks/usePagination';

import PageItem from './page-item';
import PageArrow from './page-item/page-arrow';
import PageDots from './page-item/page-dots';

const StyledPagesList = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;

const PagesList = ({ totalCount, currentPage, dispatchCallback }) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        dispatchCallback({ type: 'increment' });
    };

    const onPrevious = () => {
        dispatchCallback({ type: 'decrement' });
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <StyledPagesList>
            {/* Left navigation arrow */}
            <PageArrow left disabled={currentPage === 1} onClick={onPrevious} />

            {paginationRange.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <PageDots />;
                }

                // Render our Page Pills
                return (
                    <PageItem
                        selected={pageNumber === currentPage}
                        onClick={() =>
                            dispatchCallback({
                                type: 'setPage',
                                payload: pageNumber,
                            })
                        }
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
