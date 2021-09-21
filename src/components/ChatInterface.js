import React, { useState } from 'react';

import { Wrapper } from './chatInterface.style';
import MessageSide from './MessageSide/MessageSide';
import SideBar from './SideBar/SideBar';

const ChatInterface = () => {
  
  const [activeDialog, setActiveDialog] = useState('1');
   
 
  return (
          <Wrapper>
            <SideBar />
           
          
         
            <MessageSide/>
          </Wrapper>
  
    );
};

export default ChatInterface;