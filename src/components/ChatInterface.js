import React from 'react';
import {  Wrapper } from './chatInterface.style';
import MessageSide from './MessageSide/MessageSide';
import SideBar from './SideBar/SideBar';

const ChatInterface = () => {
    return (
  
        <Wrapper>
          <SideBar/>
          <MessageSide/>
       
        </Wrapper>
  
    );
};

export default ChatInterface;