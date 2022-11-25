import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import './index.css';
import About from "./Pages/About";
import MyNavBar from "./Components/MyNavBar";
import Footer from "./Components/Footer";
import Welcome from "./Pages/Welcome";




function App() {
  return (
    <div className="App">
      
     
      
      <Router>
      <MyNavBar/>
      <Routes>  
        <Route path="/" element={<Welcome/> }/>
        <Route path="/imc-calculator" element={<Welcome/> }/>
        <Route path="/" element={<Welcome/> }/>
        <Route path="/" element={<Welcome/> }/>
        <Route path="/" element={<Welcome/> }/>
        <Route path="/" element={<Welcome/> }/>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
