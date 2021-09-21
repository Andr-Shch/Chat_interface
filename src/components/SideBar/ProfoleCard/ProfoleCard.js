import React from 'react';
import Avatar from '../../UI/Avatar/Avatar';
import { Content, Wrapper } from './profileCard.styles';



const ProfileCard = ({userName, ava}) => {
    return (
        <Wrapper>
            <Avatar online={true} ava={ava} />
           
              <Content>  
               <div className='NameDate'>
                  <span className='name'>{userName}</span>

                  <span className='date'>Sep 20 2021</span>  
               </div>
               
               
                
                <div className='lastMessage'> fwef wefwe fwefddddd?</div>
          
               </Content> 
              

        </Wrapper>
    );
};

export default ProfileCard;