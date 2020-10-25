import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    
     <Router >
       <div className= "container">
        <Header/>
        <Body/>

       </div>
      </Router>

  //<Nav/>


//<div class="container">

  //<Header/>
  //<Content/>


  
  
  //</div>
    
  );
}

export default App;
