import styled from "styled-components";


export const Wrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 35vw;
  background: white;
  border-right: var(--greyBorder);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
}

   h2{
     font-weight: 500;
     margin: 40px 15px;
     color: var(--blueFont)
   }
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  height: 145px;
  width: 100%;
  background-color: var(--lightGrey);
  border-bottom: var(--greyBorder)
  
`
