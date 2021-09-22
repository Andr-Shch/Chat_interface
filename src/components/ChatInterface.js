import React, { useState } from 'react';
import { Route } from 'react-router';
import JSDATA from '../DATA/MOCK_DATA.json'
import { Wrapper } from './chatInterface.style';
import MessageSide from './MessageSide/MessageSide';
import SideBar from './SideBar/SideBar';



const ChatInterface = () => {
   
   const [allData, setAllData] = useState(JSDATA)
   

  return (
    <Wrapper>

      <SideBar JSDATA={JSDATA} />

      <Route exact path='/:userID' >
        <MessageSide JSDATA={JSDATA} />
      </Route>

    </Wrapper>

  );
};

export default ChatInterface;