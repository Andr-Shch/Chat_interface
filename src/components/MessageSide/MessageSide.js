import React, { useEffect, useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import { Dialog, Title, Wrapper } from './messageSide.styles';
import SendArea from './SendArea/SendArea';
import YourMessage from '../UI/Message/YourMessage';
import MyMessage from '../UI/Message/MyMessage';
import {  useParams } from 'react-router';
import { format } from 'date-fns';

const MessageSide = ({JSDATA}) => {

  const { userID } = useParams()
  const [dialogData, SetDialogData] = useState([])
  const [newMessage, setNewMessage]= useState('')

  const dataFilter=(id) =>{
    let filtered = JSDATA.filter(x => x.id == id)
    SetDialogData(filtered[0])
   
  }

   const send =()=> { 
     let curentTime = format(new Date(), 'HH:mm:ss  dd/MM/yyyy ')
  
     let allData = {
         text:newMessage,
         send:'false',
         date: curentTime 
     }
      dialogData.message.push(allData)
      console.log(dialogData);
     
      setNewMessage('')
      getJoke()
  }

  const getJoke = () =>{
    setTimeout(async function  (){
      let response = await fetch('https://api.chucknorris.io/jokes/random');

      if (response.ok) { 
        let json = await response.json();
        let curentTime = format(new Date(), 'HH:mm:ss  dd/MM/yyyy ')
         console.log(json.value);
       let allData = {
         text:json.value,
         send:'true',
         date: curentTime 
     }
      
      
      
      } else {
        alert("Ошибка HTTP: " + response.status);
      } 
   }, 1000);
  }

  useEffect(()=>{
    dataFilter(userID)
   
  }, [userID, dialogData])
   
   const profileIMG = dialogData.avatar
  
  return (
    <Wrapper>

      <Title>
        <Avatar online={true} ava={profileIMG} />
        <h2 >{dialogData.fullName}</h2>
      </Title >
      <Dialog>
       
      { dialogData.message && dialogData.message.map( (el, ind) =>el.send == 'true'
                                     ?<YourMessage key={ind} ava={ profileIMG} date={el.date} text={el.text} /> 
                                     : <MyMessage  key={ind} date={el.date} text={el.text} /> )}

      </Dialog>

      <SendArea newMessage={newMessage}  setNewMessage={setNewMessage} send={send} />
    </Wrapper>
  );
};

export default MessageSide;