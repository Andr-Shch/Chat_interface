import React from 'react';
import { Wrapper } from './searchField.style';
import searchIcon from '../../../images/searchIcon.png'


const SearchField = ({searchQuery, setSearchQuery}) => {
    return (
        <Wrapper>
        <img src={searchIcon} alt='search-icon'/>
        <input 
           type='text' 
           placeholder='Search or start new chat' 
           value={searchQuery}
           onChange={e=>setSearchQuery(e.target.value)}
           />
     </Wrapper>
    );
};

export default SearchField;