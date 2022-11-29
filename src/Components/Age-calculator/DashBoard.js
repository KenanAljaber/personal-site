import DatePicker from "./DatePicker";
import "../../styles/datePicker.css"

const DashBoard = ({lableText}) => {
    return (
    <div className="Agedashboard">
        <DatePicker lableText={lableText}/>

    </div>  );
}
 
export default DashBoard;