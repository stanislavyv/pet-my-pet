import styled from 'styled-components';
import { device } from '../../config/css';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const StyledSearchBar = styled.div`
    position: relative;

    & input {
        min-height: 1.9rem;
        width: 100%;
        border-radius: 13px;
        border: 1px solid gray;
    }

    & i.fa {
        position: absolute;
        left: 6px;
        color: #afafaf;
    }

    & input:focus {
        outline: 1px solid #090;
    }

    & input::placeholder {
        color: #afafaf;
    }

    @media ${device.mobileS} {
        margin: 0 0 0.2rem 0;
        max-width: 10rem;

        & input {
            font-size: 1.5rem;
            padding: 0.1rem 0.4rem 0.1rem 1.6rem;
        }

        & i.fa {
            font-size: 1.1rem;
            top: 8px;
        }
    }

    @media ${device.laptop} {
        margin: 0.8rem 0 0.2rem 0;
        max-width: 16rem;

        & input {
            padding: 0 0.4rem 0 1.4rem;
            font-size: 1.6rem;
            padding-left: 1.7rem;
        }

        & i.fa {
            font-size: 1.2rem;
            top: 6px;
        }
    }
`;

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (search) {
            const intervalId = setInterval(() => {
                setSearchParams((state) => {
                    state.set('search', search);
                    return state;
                });
            }, 800);

            return () => clearInterval(intervalId);
        }
    }, [search]);

    const onSearchInput = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <StyledSearchBar>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input
                type="search"
                name="search-bar"
                placeholder="Search..."
                onInput={onSearchInput}
            />
        </StyledSearchBar>
    );
};

export default SearchBar;
