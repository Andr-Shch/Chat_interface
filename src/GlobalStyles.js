import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --greyBorder: 3px solid #ECECEC;
    --white:#FAFAFA;
    --lightGrey: #F5F5F5;
    --blueFont: #3995C2;
    --greyFont: #A5A5A5;
    --darkGrey: #3C4252;
    --fontSuperBig:2.5rem;
    --fontBig: 1.5rem;
    --fontMed:1rem;
    --fontSmall:1rem;
}
*{
    box-sizing: border-box;
    font-family: 'Able', sans-serif;
}
body{
  padding:0;
  margin:0;
}

`