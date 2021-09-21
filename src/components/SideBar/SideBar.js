//import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import SearchField from './SearchField/SearchField';
import { Title, Wrapper } from './sedeBar.styles';
import ava from '../../images/defaultUser.png'
import ProfileCard from './ProfoleCard/ProfoleCard';
//import { data } from '../../DATA/data';
import JSDATA from '../../DATA/MOCK_DATA.json'
import NoResults from '../UI/Noresults/NoResults';

const SideBar = ({activeDialog, setActiveDialog}) => {
    const [searchQuery, setSearchQuery ] = useState('')
    console.log(searchQuery);

    const userList = JSDATA.filter(val=>{
        if (searchQuery===''){
            return val
        } else if (val.fullName.toLowerCase().includes(searchQuery.toLocaleLowerCase())){
            return val
        }
       
    }).map(el=>
    <ProfileCard  ava={el.avatar} key={el.id} userName={el.fullName} />)
    
  
  
    return (
    
       <Wrapper>
            <Title>
             <Avatar online={true} ava={ava}/>
             <SearchField
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery} />  
            </Title>
            <h2>Chats</h2>
          
             {userList.length===0?<NoResults/> :userList}
        
        </Wrapper>
  
   
    );
};

export default SideBar;