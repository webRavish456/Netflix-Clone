import "./App.scss";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
   
    
  return (
    <>
       <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
           
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
