import { useState } from "react";
import "../../styles/clock-style.css"
const Clock = () => {
/*
    estoy utilizando los useState para actualizar las manillas del reloj cada vez que se cambia el tiempo
    */
    const [secondsHand,setSecondsHand]=useState(1);
    const [minutesHand,setMinuteHand]=useState(1);
    const [hoursHand,setHoursHand]=useState(1);
    
    //obtengo el tiempo por medio del constructer de Date()
  // console.log(new Date().getHours());
    const time= new Date();
    /**
     * en este method hago pongo los values de cada useState despues de calcular el tiempo
     * y llamo al method calculatehours para calcular la hora segun los minutos 
     * @param {es el tiempo actual del dia} time 
     */
   const definetime=(time)=>{
        let seconds=time.getSeconds();
        let minutes=time.getMinutes();
        let hours=time.getHours();

        //multiplcar los segundos y minutos con 6 (6 son los grados entre cada numero en el reloj)
        seconds= (seconds*6);
        minutes=(minutes*6);
       // console.log("seconds",seconds);
        hours=calculateHours(time);

    //hagamos que el reloj se actualiza cada segundo
        setTimeout(()=>{
            setSecondsHand(seconds);
            setMinuteHand(minutes);
            setHoursHand(hours);
        },1000);
   }

   /**
    * calcular las horas aparte para que va actualizando segun los minutos
    * @param {el tiempo actual del dia} time 
    * @returns la hora para mostrarla en el reloj
    */
   const calculateHours=(time)=>{

    let minutes=(time.getMinutes());
    if(time.getHours>12){
        let hours=(Math.abs((time.getHours()-12))*30)+(minutes/2);
        return hours;
    }else{
        let hours=(Math.abs((time.getHours()))*30)+(minutes/2);
        return hours;
    }
   
   
   }
   definetime(time);

   // Aqui estan los styles de cada uno de las manillas, practicamente aqui solo actualizamos la rotacion de cada manilla
   // el resto del style esta puesto en app.css
    const secondsStyle={
        transform: "rotate("+secondsHand+"deg)",
       
    }
    const minutesStyle={
        transform: "rotate("+minutesHand+"deg)",
       
    }
    const hoursStyle={
        transform: "rotate("+hoursHand+"deg)",
       
    }
  
    
    return (
        <div className="clockContainer">
        <div className="clock">
        <div className="hand hour" data-hour-hand style={hoursStyle}></div>
        <div className="hand minute" data-minute-hand style={minutesStyle}></div>
        <div className="hand second" data-second-hand style={secondsStyle}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
      <p style={{color:"#6d3900",marginTop:"50px"}}>This is a simple Clock created with react and css</p>
      </div>
  
    );
}

export default Clock;