import React, { useEffect, useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import { Dialog, Title, Wrapper } from './messageSide.styles';

import SendArea from './SendArea/SendArea';
import YourMessage from '../UI/Message/YourMessage';
import MyMessage from '../UI/Message/MyMessage';
import {  useParams } from 'react-router';

const MessageSide = ({JSDATA}) => {

  const { userID } = useParams()
 
  const [dialogData, SetDialogData] = useState([])
  
  const dataFilter=(id) =>{
    let filtered = JSDATA.filter(x => x.id == id)
    SetDialogData(filtered[0])
   
  }
  useEffect(()=>{
    dataFilter(userID)
  }, [userID])
 
   const profileIMG = dialogData.avatar
  
  return (
    <Wrapper>

      <Title>
        <Avatar online={true} ava={profileIMG} />
        <h2>{dialogData.fullName}</h2>
      </Title>
      <Dialog>
       
      { dialogData.message && dialogData.message.map( el =>el.send == 'true'
                                     ?<YourMessage key={el.date} ava={ profileIMG} date={el.date} text={el.text} /> 
                                     : <MyMessage  key={el.date} date={el.date} text={el.text} /> )}

      </Dialog>

      <SendArea  />
    </Wrapper>
  );
};

export default MessageSide;