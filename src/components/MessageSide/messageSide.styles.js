import styled from "styled-components";


export const Wrapper = styled.div`
 width: 75vw;
 height: 100vh;
 background: var(--white);
 /* display: flex;
 flex-direction: column;
 justify-content: space-between; */
`
export const Title = styled.div`
display: flex;
align-items: center;
 padding-left: 20px;
 height: 66px;
 width: 100%;
 background: var(--lightGrey);
 border-bottom: var(--greyBorder);
  h2{
  font-weight:500;
  margin-left: 20px;
 }
`
export const Dialog = styled.div`
 width: 100%;
 height: calc(100vh - 171px);
 display: flex;
 flex-direction: column;

`