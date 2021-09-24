import React from 'react';
import { timeWithMonth } from '../../../helper';
import Avatar from '../../UI/Avatar/Avatar';
import { Content, Wrapper } from './profileCard.styles';



const ProfileCard = ({userName, ava, lastMess}) => {
    return (
        <Wrapper>
            <Avatar online={true} ava={ava} />
           
              <Content>  
               <div className='NameDate'>
                  <span className='name'>{userName}</span>

                  <span className='date'>{timeWithMonth( lastMess.date )}</span>  
               </div>
               
               
                
                <div className='lastMessage'>{lastMess.text}</div>
          
               </Content> 
              

        </Wrapper>
    );
};

export default ProfileCard;