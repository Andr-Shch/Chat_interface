
import React from 'react';
import Avatar from '../UI/Avatar/Avatar';
import {  Title, Wrapper } from './messageSide.styles';
import ava from '../../images/defaultUser.png'
const MessageSide = () => {
    return (
        <Wrapper>
           <Title>
               <Avatar ava={ava} />
               <h2>User name</h2>
           </Title>
        </Wrapper>
    );
};

export default MessageSide;