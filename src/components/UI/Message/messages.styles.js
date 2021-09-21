import styled from "styled-components";

export const YourWrapper = styled.div`
  margin: 20px 15px;
  display: flex;
`
export const YourContent = styled.div`
  margin-left: 10pxpx;
  max-width: 80%;
  .yourText{
    display: flex;
    align-items: center;
    color: white;
    min-height: 40px;
    background: var(--darkGrey);
    border-radius: 25px;
    padding: 5px 15px;
   // white-space: break-spaces;
  }
  .yourDate{
    margin-left: 15px;
     font-size: 0.8rem;
     color:var(--greyFont);
  
  }
`





export const MyWrapper = styled.div`
  align-self: flex-end;
  margin-right: 15px;
  .myText{
    display: flex;
    align-items: center;
    color: #434343;
    background: var(--greyMessage);
    min-height: 40px;
     border-radius: 25px;
    padding: 5px 15px;
  
  }
  .myDate{
    float: right;
    margin-right: 15px;
     font-size: 0.8rem;
     color:var(--greyFont);
  }
`