import { useState } from 'react';
import React  from "react";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({placeholder}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          navigate(`/search?q=${searchTerm}`);
        }
      };
    return (
        <div>
            <input
             type="text"
              className="form-control" 
              value={searchTerm} 
              placeholder={placeholder}
              onChange={(e)=>setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchBar