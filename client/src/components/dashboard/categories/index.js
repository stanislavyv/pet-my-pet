import { device } from '../../../config/css';

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';

import Button from '../../shared/button';
import CategoriesList from './categories-list';
import CategoryButton from './category-button';

const StyledCategories = styled.nav`
    display: flex;
    justify-content: center;

    @media ${device.mobileS} {
        margin: 1.5rem 0;
        flex-direction: column;
        align-items: center;

        & button {
            font-size: 1.5rem;
        }
    }

    @media ${device.laptop} {
        margin: 0.4rem 0;
        flex-direction: row;

        & button {
            font-size: 1rem;
        }
    }
`;

const Categories = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [, setSearchParams] = useSearchParams();

    const links = [
        { name: 'All', search: '' },
        { name: 'Cats', search: 'cat' },
        { name: 'Dogs', search: 'dog' },
        { name: 'Parrots', search: 'parrot' },
        { name: 'Reptiles', search: 'reptile' },
        { name: 'Other', search: 'other' },
    ];

    function onCategoryButtonClick() {
        setIsExpanded(!isExpanded);
    }

    function onCategoryClick(category) {
        setSearchParams({ category: encodeURIComponent(category) });
    }

    return (
        <StyledCategories>
            <CategoryButton onClick={onCategoryButtonClick} />
            <CategoriesList isExpanded={isExpanded}>
                {links.map((link, index) => {
                    return (
                        <li key={index} onClick={onCategoryButtonClick}>
                            <Button
                                link
                                onClick={() => onCategoryClick(link.search)}
                            >
                                {link.name}
                            </Button>
                        </li>
                    );
                })}
            </CategoriesList>
        </StyledCategories>
    );
};

Categories.displayName = 'Categories';
export default Categories;
