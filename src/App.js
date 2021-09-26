
import { BrowserRouter } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import { GlobalStyle } from './GlobalStyles';
import FacebookLogin from 'react-facebook-login';

  //  onClick={componentClicked}
  //  callback={responseFacebook} 

function App() {

  const responseFacebook=(response)=>{
    console.log(response);
  }



  return (
    <>
     
     <BrowserRouter>
     <FacebookLogin
    appId="234597485389849"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} 

  />
       <ChatInterface/>
       <GlobalStyle/>
    
     </BrowserRouter>
     
    
    </>
  );
}

export default App;
