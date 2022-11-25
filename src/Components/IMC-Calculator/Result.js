import { useState } from "react";
import "../../styles/imc-calc.css"

const Result = ({ weight, height }) => {
    const [result, setResult] = useState(0);
    const [weightState, setWeightState] = useState("");
    const [stateColor,setStateColor]=useState("black");

    const process = (result) => {
        console.log(result)
        if (result >= 18.5 && result <= 24.9) {
            setStateColor("green");
            setWeightState("Normal");
            
        } else if (result >= 25 && result <= 29.9) {
            setWeightState("Sobrepeso");
            setStateColor("yellow");
        } else if (result >= 30 && result <= 34.9) {
            setWeightState("Obesidad grado I");
            setStateColor("red");
        } else if (result >= 35 && result <= 39.9) {
            setWeightState("Obesidad grado II");
            setStateColor("red");
        } else if (result > 39.9) {
            setWeightState("Obesidad grado III");
            setStateColor("red");
        }

    }
   
  const calculate=()=>{
    let hieghtPerMeter=height*0.01;
    let MC=weight/(hieghtPerMeter*hieghtPerMeter);
    process(MC);
    setResult(MC);
    console.log(stateColor);
  }
   const style={
    color:stateColor
   };

    return (
    <div>
        <h3>{result}</h3>
        <h3 style={style}>{weightState}</h3>
        <button  onClick={calculate}>calculate</button >

    </div>
    );
}

export default Result;