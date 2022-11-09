import React from 'react';
import { useSearchParams } from 'react-router-dom';

import styled from 'styled-components';

import Button from '../../shared/button';
import CategoriesList from './categories-list';

const StyledCategories = styled.nav`
    margin: 0.4rem 0;
    display: flex;
    justify-content: center;
`;

const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const links = [
        { name: 'All', search: '' },
        { name: 'Cats', search: 'cat' },
        { name: 'Dogs', search: 'dog' },
        { name: 'Parrots', search: 'parrot' },
        { name: 'Reptiles', search: 'reptile' },
        { name: 'Other', search: 'other' },
    ];

    function onCategoryClick(category) {
        setSearchParams({ category: category });
    }

    return (
        <StyledCategories>
            <CategoriesList>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
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
