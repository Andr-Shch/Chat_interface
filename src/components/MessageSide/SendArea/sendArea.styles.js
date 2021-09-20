import styled from "styled-components";

 

 export const Wrapper = styled.div`
  height: 105px;
  width: 100%;
  border-top: var(--greyBorder);
  background: var(--lightGrey);
  padding: 20px 30px;
 ` 

 export const Content = styled.div`
 position: relative;
 
  border: var(--greyBorder);
  width: 100%;
  height: 60px;
  background: var(--white);
  margin: 0 auto;
  border-radius: 25px;
  color: var(--white);
  img{
      position: absolute;
      right:10px;
      top:10px;
      width: 35px;
      opacity: 0.55;
      border-radius:50%;
      cursor: pointer;
  }
 
 input{
    font-size: var(--fontMed);
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 20px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var( --greyFont);
    :focus {
      outline: none;
    }
}
 `