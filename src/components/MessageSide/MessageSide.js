import React, { useEffect, useState } from 'react';
import Avatar from '../UI/Avatar/Avatar';
import { Dialog, Title, Wrapper } from './messageSide.styles';
import SendArea from './SendArea/SendArea';
import YourMessage from '../UI/Message/YourMessage';
import MyMessage from '../UI/Message/MyMessage';
import { useParams } from 'react-router';
import { format, parseJSON } from 'date-fns';
import { isPersistedState } from '../../helper';

const MessageSide = ({ allData, setAllData }) => {

  const { userID } = useParams()

  // const [filtered, setDialogData] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const dialogWindow = document.querySelector('.dialogWindow')
 
  
    let filtered = allData.filter(x => x.id == userID)[0]
    const profileIMG = filtered.avatar

  
  // window.onload = function(){
  //   let sessionState = isPersistedState("state")
  //   if (sessionState){
  //     //setAllData(sessionState)
  //    setDialogData(sessionState[0])
  //     return
  //   }
  //   }

  function ScrollToBottom() {
    window.scrollTo(0, dialogWindow)

  }
 // ScrollToBottom()

 
  const send = (InputTex) => {     //function send new message

    if (InputTex === '') {         //prevent send empty message
      return false
    } else {

      let curentTime = JSON.stringify(new Date())          
      let newSend = {
        text: InputTex,
        send: 'false',
        date: curentTime
      }
       let a= filtered.message.push(newSend)
       
        
      setAllData(value => value.map(el => el.id === userID ? { ...el, message: filtered.message.push(newSend) } : el)) //bloody hell


      ScrollToBottom()
     
      setNewMessage('')
      sessionStorage.setItem("state", JSON.stringify(allData))
      getJoke()
    }
  }



  const getJoke = () => {                    //function to get respons from Chack Noris
    setTimeout(async function () {
      let response = await fetch('https://api.chucknorris.io/jokes/random');

      if (response.ok) {
        let json = await response.json();
        let curentTime = JSON.stringify(new Date()) 
       
        let newResponse = {
          text: json.value,
          send: 'true',
          date: curentTime
        }
       
        let a= filtered.message.push(newResponse)
      setAllData(value => value.map(el => el.id === userID ?  { ...el, message: filtered.message.push(newResponse) } : el))
        sessionStorage.setItem("state", JSON.stringify(allData))
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    }, 5000);
  }

  // useEffect(() => {
  //   dataFilter(userID)
  // }, [userID, filtered])

  

  return (
    <Wrapper>

      <Title>
        <Avatar online={true} ava={profileIMG} />
        <h2 >{filtered.fullName}</h2>
      </Title >
      <Dialog className='dialogWindow'>

        {filtered.message && filtered.message.map((el, ind) => el.send == 'true'
          ? <YourMessage key={ind} ava={profileIMG} date={el.date} text={el.text} />
          : <MyMessage key={ind} date={el.date} text={el.text} />)}

      </Dialog>

      <SendArea newMessage={newMessage} setNewMessage={setNewMessage} send={send} />
    </Wrapper>
  );
};

export default MessageSide;