import React, { useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import SearchField from './SearchField/SearchField';
import { Title, Wrapper } from './sedeBar.styles';
import ava from '../../images/defaultUser.png'
import ProfileCard from './ProfoleCard/ProfoleCard';
import NoResults from '../UI/Noresults/NoResults';
import { NavLink, Redirect } from 'react-router-dom';

const SideBar = ({ jsDATA }) => {
    const [searchQuery, setSearchQuery] = useState('')
   
      
    const userList = jsDATA?.filter(val => {
        if (searchQuery === '') {
            return val
        } else if (val.fullName.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
            return val
        }

    }).map(el =>
        <NavLink key={el.id} to={'/' + el.id} style={{ textDecoration: 'none' , color: 'inherit'}}>
            <ProfileCard  ava={el.avatar} userName={el.fullName} lastMess={el.message.slice(-1)[0]} />
        </NavLink>)
  
 
    return (

        <Wrapper >
            <Title>
                <Avatar online={true} ava={ava} />
                <SearchField
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery} />
            </Title>
            <h2 >Chats</h2>
            <Redirect to={"/1" }  />
            {userList.length === 0 ? <NoResults /> : userList}

        </Wrapper>


    );
};

export default SideBar;