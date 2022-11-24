import { device } from '../../../config/css';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const StyledSortBy = styled.section`
    & select,
    & option {
        font-size: 1.1rem;
    }

    & select {
        background-color: white;
        min-width: 5.5rem;
        text-align: center;
    }

    & option {
        text-align: center;
    }

    & option[selected] {
        background-color: black;
    }

    @media ${device.mobileS} {
        margin-top: 1.4rem;
    }

    @media ${device.laptop} {
        margin-top: 0;
    }
`;

const SortBy = () => {
    const [selectedValue, setSelectedValue] = useState('default');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (selectedValue) {
            setSearchParams((state) => {
                state.set('sort', encodeURIComponent(selectedValue));
                state.delete('page');
                return state;
            });
        }
    }, [selectedValue]);

    useEffect(() => {
        if (!searchParams.has('sort')) {
            setSelectedValue('default');
        }
    }, [searchParams]);

    const options = [
        {
            value: 'alphabetical',
            text: 'A-Z',
        },
        {
            value: 'likes-asc',
            text: 'Likes &#9652;',
        },
        {
            value: 'likes-desc',
            text: 'Likes &#9662;',
        },
    ];

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
    };

    return (
        <StyledSortBy>
            <label htmlFor="select">Sort by </label>
            <select name="select" onChange={handleChange} value={selectedValue}>
                <option hidden value="default">
                    A-Z
                </option>
                {options.map((obj, key) => {
                    return (
                        <option
                            key={key}
                            value={obj.value}
                            dangerouslySetInnerHTML={{ __html: obj.text }}
                        ></option>
                    );
                })}
            </select>
        </StyledSortBy>
    );
};

export default SortBy;
