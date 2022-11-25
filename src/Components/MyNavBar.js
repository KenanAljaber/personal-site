
import {  NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
const textStyle = {
  textDecoration: "none",
  color:"black",
}
const MyNavBar = () => {
  return (
    <div>
      <div className='navbar'>
    
          <li  ><NavLink style={textStyle} to="/">Home</NavLink></li>
          <li  ><NavLink style={textStyle} to="/imc-calculator">IMC Calculator</NavLink></li>
          <li  ><NavLink style={textStyle} to="/age-calculator">Age Calculator</NavLink></li>
        <li className="MyNavBar-kruger"><img src={logo}/>Kruger Star</li>
          <li ><NavLink style={textStyle} to="/clock">My Clock</NavLink></li>
          <li>About Me</li>
          <li>Contact</li>
  

      </div>
      <div className="line" />
    </div>
  );
}

export default MyNavBar;