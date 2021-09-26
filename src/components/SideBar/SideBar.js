import React, { useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import SearchField from './SearchField/SearchField';
import { Title, Wrapper } from './sedeBar.styles';
import ava from '../../images/defaultUser.png'
import ProfileCard from './ProfoleCard/ProfoleCard';
import NoResults from '../UI/Noresults/NoResults';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { parseJSON } from 'date-fns';


const SideBar = ({ jsDATA }) => {
    const [searchQuery, setSearchQuery] = useState('')
    
   
      
    const userList = jsDATA?.filter(val => {   // for searching
        if (searchQuery === '') {  
            return val
        } else if (val.fullName.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
            return val
        }
        
    }).map(el =>                               // for rendering user list
        <NavLink key={el.id} to={'/' + el.id} style={{ textDecoration: 'none' , color: 'inherit'}}>
            <ProfileCard  ava={el.avatar} userName={el.fullName} lastMess={el.message.slice(-1)[0]} />
        </NavLink>).sort(function(a,b){        //sort user by last message time
  
  return parseJSON( b.props.children.props.lastMess.date) - parseJSON( a.props.children.props.lastMess.date);
})
      
      
    return (

        <Wrapper >
            <Title>
                <Avatar online={true} ava={ava} />
                <SearchField
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery} />
            </Title>
            <h2 >Chats</h2>
            <Route exact path="/">
                <Redirect to="/5" />
            </Route>
            {userList.length === 0 ? <NoResults /> : userList}

        </Wrapper>


    );
};

export default SideBar;