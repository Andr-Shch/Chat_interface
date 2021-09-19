import React from 'react'
import { Image, Status, Wrapper } from './avatar.styles'
//import ava from '../../../images/defaultUser.png'
import check from '../../../images/pngwing.png'

const Avatar = ({ava}) => {
    return (
       <Wrapper className='offline'>
        <Image src={ava}  />
        <Status src={check} />
       </Wrapper>
    );
};

export default Avatar;