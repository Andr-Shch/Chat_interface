import React from 'react';
import { Wrapper, Content } from './sendArea.styles';
import paper_Plane from '../../../images/send_icon.png'

const SendArea = ({newMessage, setNewMessage, send}) => {
    return (
     
 <Wrapper>
          <Content>
         
          <img alt='paper plane' src={paper_Plane}   onClick={()=>send(newMessage)} />
         
          <input 
           type='text' 
           placeholder='Type your message' 
           value={newMessage}
           onChange={e=> setNewMessage(e.target.value)}
           />
         
          </Content>
        </Wrapper>
      
      
    );
};

export default SendArea;