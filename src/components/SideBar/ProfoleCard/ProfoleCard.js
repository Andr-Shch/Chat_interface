import React from 'react';
import Avatar from '../../UI/Avatar/Avatar';
import { Content, Date, NameMessage, Wrapper } from './profileCard.styles';
import ava from '../../../images/defaultUser.png'

const ProfileCard = () => {
    return (
        <Wrapper>
            <Avatar ava={ava} />
           
              <Content>  
               <div className='NameDate'>
                  <span className='name'>Josephine</span>

                  <span className='date'>Sep 20 2021</span>  
               </div>
               
               
                
                <div className='lastMessage'> fwef wefwe fwefddddd?</div>
          
               </Content> 
              

        </Wrapper>
    );
};

export default ProfileCard;