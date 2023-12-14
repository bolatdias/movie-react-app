import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchItems from '../search-items';

const SearchPage = ({ movieService }) => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('q') || 'DefaultSearchTerm';

    return (
        <div>
            <SearchItems movieService={movieService}/>
        </div>
    )
}

export default SearchPage;