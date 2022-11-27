
import ImcDash from "../Components/IMC-Calculator/ImcDash";
import "../styles/imc-calc.css"

const ImcCalculatorPage = () => {
    return ( 
        <div className="imcCalculatorPage-Container">
            <h1>IMC Calculator</h1>
                <ImcDash/>
                <p className="imcCalculatorPage-desc">This is a calculator of corporal mass, You only have to enter
         your weight and hight and then press calculate button 
           the calculator will show you the result of your corporal mass.</p>
            
        </div>
       
     );
}
 
export default ImcCalculatorPage ;