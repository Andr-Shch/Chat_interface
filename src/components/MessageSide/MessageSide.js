
import React from 'react';
import Avatar from '../UI/Avatar/Avatar';
import {  Dialog, Title, Wrapper } from './messageSide.styles';
import ava from '../../images/defaultUser.png'
import SendArea from './SendArea/SendArea';
import YourMessage from '../UI/Message/YourMessage';
import MyMessage from '../UI/Message/MyMessage';

const MessageSide = () => {
    return (
        <Wrapper>
           <Title>
               <Avatar online={true} ava={ava} />
               <h2>User name</h2>
           </Title>
           <Dialog>
            <YourMessage/>
            <MyMessage />
          
           </Dialog>
          <SendArea />
        </Wrapper>
    );
};

export default MessageSide;