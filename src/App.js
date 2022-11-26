import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import './styles/index.css';
import About from "./Pages/About";
import MyNavBar from "./Components/MyNavBar";
import Footer from "./Components/Footer";
import Welcome from "./Pages/Welcome";
import ImcCalculatorPage from "./Pages/ImcCalculatorPage";
import AgeCalculator from "./Pages/AgeCalculator";
import Clock from "./Components/ClockComponent/Colock";
import AboutMe from "./Pages/AboutMe";



function App() {
  return (
    <div className="App">
      
     
      
      <Router>
      <MyNavBar/>
      <Routes>  
        <Route path="/" element={<Welcome/> }/>
        <Route path="/imc-calculator" element={<ImcCalculatorPage/> }/>
        <Route path="/age-calculator" element={<AgeCalculator/> }/>
        <Route path="/clock" element={<Clock/> }/>
        <Route path="/about-me" element={<AboutMe/> }/>
        <Route path="/" element={<Welcome/> }/>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
