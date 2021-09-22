
import { BrowserRouter } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
     <BrowserRouter>
       <ChatInterface/>
       <GlobalStyle/>
    
     </BrowserRouter>
     
    
    </>
  );
}

export default App;
