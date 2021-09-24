import React from 'react';
import { timeInNumbers } from '../../../helper';
import { MyWrapper } from './messages.styles';

const MyMessage = ({date, text}) => {
    return (
       <MyWrapper>
           <div className="myText">{text}</div>
           <div className='myDate'>{timeInNumbers(date)}</div>
       </MyWrapper>
    );
};

export default MyMessage;