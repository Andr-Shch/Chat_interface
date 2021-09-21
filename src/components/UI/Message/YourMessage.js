import React from 'react';
import Avatar from '../Avatar/Avatar';
import { YourContent, YourWrapper } from './messages.styles';

const YourMessage = () => {
    return (
      <YourWrapper>
          <Avatar  ava={"https://robohash.org/doloremaliquidblanditiis.png?size=50x50&set=set1"}/>
         
        <YourContent>
          <div className='yourText'>  qwd qwd wq qw qw d цй цйв йц цй цй цйвцйв ц цйвйцвйц</div>
          <div className='yourDate'>13/12/12</div>
        </YourContent>

      </YourWrapper>
       
    );
};

export default YourMessage;