import React, { useState } from 'react';
import { Route } from 'react-router';
import JSDATA from '../DATA/MOCK_DATA.json'
import { isPersistedState } from '../helper';
import { Wrapper } from './chatInterface.style';
import MessageSide from './MessageSide/MessageSide';
import SideBar from './SideBar/SideBar';



const ChatInterface = () => {
   
   const [allData, setAllData] = useState(JSDATA)
  
   window.onload = function(){
   let sessionState = isPersistedState("state")
   if (sessionState){
     setAllData(sessionState)
    // setDialogData(sessionState)
     return
   }
   }
   
  return (
    <Wrapper>

      <SideBar jsDATA={allData} />

      <Route exact path='/:userID' >
        <MessageSide  allData={allData} setAllData={setAllData} />
      </Route>

    </Wrapper>

  );
};

export default ChatInterface;