import React from 'react';
import { MyWrapper } from './messages.styles';

const MyMessage = ({date, text}) => {
    return (
       <MyWrapper>
           <div className="myText">{text}</div>
           <div className='myDate'>{date}</div>
       </MyWrapper>
    );
};

export default MyMessage;