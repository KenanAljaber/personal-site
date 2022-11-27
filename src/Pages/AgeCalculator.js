import DashBoard from "../Components/Age-calculator/DashBoard";
import DatePicker from "../Components/Age-calculator/DatePicker";
import '../styles/datePicker.css';
const AgeCalculator = () => {
    return ( 
        <div className="ageCalculatorPage-Container">
            <h1>Age Calculator</h1>
        <DashBoard lableText="select date of birth:"/>
        <p className="ageCalculatorPage-desc">This is a calculator of life time, You only have to enter the day you've been born and it 
            will show you how many Years Months and days you did live</p>
    </div>

     );
}
 
export default AgeCalculator;