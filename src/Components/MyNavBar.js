
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import openNavImg from "../assets/hamburger.png"
import close from "../assets/close.png"
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
  const [navOpened,setNavOpened]=useState(true);
  const[navBarWidth,setNavBarWidth]=useState(window.innerWidth>700?"100%":"0");

  const trackWindowSize =()=>{
    let ws=window.innerWidth;
    if(ws>700){
      setNavBarWidth("100%");
      console.log("here 100%");
    }else{
      setNavOpened(true);
      setCloseNavBarOption();
      console.log(" here 0");
    }

  }
 window.addEventListener("resize",trackWindowSize);

  const change = (intId,id) => {
   
    
      document.getElementById(id.toString()).style.textDecoration="underline";
      if(intId!==id){

        document.getElementById(intId.toString()).style.textDecoration="none";
      }
      
    
    setIntId(id);
 
  }

 
  
  const handleNavBarClick=()=>{
    
    if(window.innerWidth<=  700){
      setNavOpened(!navOpened);

    
      if(navOpened){
        setOpenNavBarOption(); 
        console.log("opened");
      }else{
        setCloseNavBarOption();
        console.log("closed");
      }
    }
    console.log("clicked");
  }
  

  const setOpenNavBarOption=()=>{
    let menuWidth=window.innerWidth/2;
        setNavBarWidth(menuWidth+"px");
        //document.getElementById("navBar").style.padding="15px";
        //close photo
        document.getElementById("navBar-open-img").src=close;
        document.getElementById("navBar-open-img").style.left=menuWidth-40+"px";
        document.getElementById("navBar-open-img").style.transition="0.8s";
  }

    const setCloseNavBarOption=()=>{
      setNavBarWidth("0");
     // document.getElementById("navBar").style.padding="0px";
      //open photo
        document.getElementById("navBar-open-img").style.left="20px";
        document.getElementById("navBar-open-img").style.transition="0.8s";
        document.getElementById("navBar-open-img").src=openNavImg;
        
    }
  
  const setId = (e) => {
    let id=parseInt(e.currentTarget.id)
    switch (id) {
      case strings.HOME:
        change(intId,id);
        handleNavBarClick();
        console.log(intId);
        break;
      case strings.IMC:
        change(intId,id);
        handleNavBarClick();
        break;
      case strings.AGE:
        change(intId,id);
        handleNavBarClick();
        break;
      case strings.CLOCK:
        change(intId,id);
        handleNavBarClick();
        break;
      case strings.ABOUT:
        change(intId,id);
        handleNavBarClick();
        break;
      case strings.CONTACT:
        change(intId,id);
        handleNavBarClick();
        break;
    }
if(intId==0){
  change(intId,1);
}

 

  }
  return (
    <div>
      <span className="navBar-open"  onClick={()=>{handleNavBarClick()}}><img id="navBar-open-img" className="navBar-open-img" src={openNavImg} /></span>
    
        <div className='navbar'  id="navBar" style={{width:navBarWidth}}>
        <li  onClick={setId} className="topNavImg"><img src={logo} /></li>
        <li id="1" onClick={setId}><NavLink style={textStyle} to="/">Home</NavLink></li>
        <li id="2" onClick={setId}><NavLink style={textStyle} to="/imc-calculator">IMC Calculator</NavLink></li>
        <li id="3" onClick={setId}><NavLink style={textStyle} to="/age-calculator">Age Calculator</NavLink></li>
        <li className="MyNavBar-kruger"><img src={logo} /><span>KrugerStar</span></li>
        <li id="4" onClick={setId}><NavLink style={textStyle} to="/clock">My Clock</NavLink></li>
        <li id="5" onClick={setId}><NavLink style={textStyle} to="/about-me">About Me</NavLink></li>
        <li id="6" onClick={setId}><NavLink style={textStyle} to="/contact">Contact</NavLink></li>
        


      </div>

      <div className="line" />
    </div>
  );
}



export default MyNavBar;