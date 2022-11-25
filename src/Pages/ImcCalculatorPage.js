import DashBoard from "../Components/Imc-Calculator/DashBoard";
import DatePicker from "../Components/Imc-Calculator/DatePicker";
import "../datePicker.css"

const ImcCalculatorPage = () => {
    return ( 

        <div className="imcCalculatorPage-Container">

            <DashBoard lableText="select date of birth:"/>
            <p className="ImcCalculatorPage-desc">This is a calculator of life time, You only have to enter the day you've been born and it 
                will show you how many Years Months and days you did live</p>
        </div>
     );
}
 
export default ImcCalculatorPage ;