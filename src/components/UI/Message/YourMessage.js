import React from 'react';
import Avatar from '../Avatar/Avatar';
import { YourContent, YourWrapper } from './messages.styles';

const YourMessage = ({ava, text, date}) => {
    return (
      <YourWrapper>
          <Avatar  ava={ava}/>
         
        <YourContent>
          <div className='yourText'>{text}</div>
          <div className='yourDate'>{date}</div>
        </YourContent>

      </YourWrapper>
       
    );
};

export default YourMessage;