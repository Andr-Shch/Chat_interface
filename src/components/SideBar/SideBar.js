import userEvent from '@testing-library/user-event';
import React from 'react';
import Avatar from '../UI/Avatar/Avatar';
import SearchField from './SearchField/SearchField';
import { Title, Wrapper } from './sedeBar.styles';
import ava from '../../images/defaultUser.png'
import ProfileCard from './ProfoleCard/ProfoleCard';


const SideBar = () => {
    return (
    
       <Wrapper>
            <Title>
               <Avatar ava={ava}/>
              <SearchField/>  
            </Title>
            <h2>Chats</h2>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
        
        </Wrapper>
  
   
    );
};

export default SideBar;