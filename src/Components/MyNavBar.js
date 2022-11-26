
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";
const textStyle = {
  textDecoration: "none",
  color: "black",
}

const strings = {
  HOME: 1,
  IMC: 2,
  AGE: 3,
  CLOCK: 4,
  ABOUT: 5,
  CONTACT: 6
};


const MyNavBar = () => {
  const [intId, setIntId] = useState(1);

  const change = (intId,id) => {
   
    
      document.getElementById(id.toString()).style.textDecoration="underline";
      if(intId!==id){

        document.getElementById(intId.toString()).style.textDecoration="none";
      }
      
    
    setIntId(id);
 
  }
  const setId = (e) => {
    let id=parseInt(e.currentTarget.id)
    switch (id) {
      case strings.HOME:
        change(intId,id);
        console.log(intId);
        break;
      case strings.IMC:
        change(intId,id);
        break;
      case strings.AGE:
        change(intId,id);
        break;
      case strings.CLOCK:
        change(intId,id);
        break;
      case strings.ABOUT:
        change(intId,id);
        break;
      case strings.CONTACT:
        change(intId,id);
        break;
    }
if(intId==0){
  change(intId,1);
}

  }
  return (
    <div>
      <div className='navbar'  >

        <li id="1" onClick={setId}><NavLink style={textStyle} to="/">Home</NavLink></li>
        <li id="2" onClick={setId}><NavLink style={textStyle} to="/imc-calculator">IMC Calculator</NavLink></li>
        <li id="3" onClick={setId}><NavLink style={textStyle} to="/age-calculator">Age Calculator</NavLink></li>
        <li className="MyNavBar-kruger"><img src={logo} />Kruger Star</li>
        <li id="4" onClick={setId}><NavLink style={textStyle} to="/clock">My Clock</NavLink></li>
        <li id="5" onClick={setId}><NavLink style={textStyle} to="/about-me">About Me</NavLink></li>
        <li id="6" onClick={setId}><NavLink style={textStyle} to="/contact">Contact</NavLink></li>


      </div>
      <div className="line" />
    </div>
  );
}

export default MyNavBar;