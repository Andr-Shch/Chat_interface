import styled from "styled-components";




export const Wrapper = styled.div`
  position: relative;
  border: var(--greyBorder);
  width: 100%;
  height: 40px;
  background: var(--white);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  img{
      position: absolute;
      left:8px;
      top:7px;
      width: 25px;
      opacity: 0.55;
      border-radius:50%50%;
  }
 
 input{
    font-size: var(--fontMed);
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 38px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 22px;
    color: var( --greyFont);
    :focus {
      outline: none;
    }
}
`