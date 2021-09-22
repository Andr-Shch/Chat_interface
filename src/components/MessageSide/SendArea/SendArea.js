import React from 'react';
import { Wrapper, Content } from './sendArea.styles';
import paper_Plane from '../../../images/send_icon.png'

const SendArea = () => {
    return (
        <Wrapper>
          <Content>
         
          <img src={paper_Plane}  />
         
          <input 
           type='text' 
           placeholder='Type your message' 
           
           />
         
          </Content>
        </Wrapper>
    );
};

export default SendArea;