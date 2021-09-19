import React from 'react';
import { Wrapper } from './searchField.style';
import searchIcon from '../../../images/searchIcon.png'


const SearchField = () => {
    return (
        <Wrapper>
        <img src={searchIcon} alt='search-icon'/>
        <input 
           type='text' 
           placeholder='Search or start new chat' 
          
           />
     </Wrapper>
    );
};

export default SearchField;