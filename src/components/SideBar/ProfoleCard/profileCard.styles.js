import styled from "styled-components";


export const Wrapper = styled.div`
 height: 90;
 width: 100%;
 border-bottom: var(--greyBorder);
 background: #FFFFFF;
 
 padding:15px;
 display: flex;
 align-items: center;
 cursor: pointer;
 :hover{
   background: var(--lightGrey);
 }
 `

 export const Content = styled.div`
   height: 100%;
   width: calc(100% - 43px); // 43px Avatar width 
   //text-align: center;
   display: flex;
   flex-direction: column;
   justify-content:center;
   margin-left: 15px;
   
   .NameDate{
       //  position: relative;
         width: 100%;
         display: flex;
         justify-content: space-between;
         
   }
   .date{
     font-size: 0.9rem;
   }
  
   .lastMessage{
       color: var(--greyFont);
      // display: inline-block;
       overflow: hidden !important;
       max-width: 90%;
       max-height: 50px;
       //white-space: nowrap;
       text-overflow: ellipsis;
   }
 `
