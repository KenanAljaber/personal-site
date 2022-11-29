import { useState } from "react";
import LifeCounts from "./LifeCounts";
import "../../styles/datePicker.css"

const DatePicker = ({ lableText }) => {
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(0);
    const [day, setDays] = useState(0);

    /**
     * this method will take care of the logic of calculating the years months and days.
     * 
     * @param {the current day} today 
     * @param {the day that user picked} pickedDate 
     */
    const calculate = (today, pickedDate) => {
        //today format is 'Tue Nov 22 2022'
        //convert it to array and take what i need from it 
        const currentDay = today.toDateString().split(" ")[2];
        const currentMonth = today.getMonth() + 1;

        let days = 0;
        let months = 0;
        //get years by subtracting current year from the picked one 
        let years = today.getFullYear() - pickedDate[0];
        //if the current month is smaller than the picked month then then month is (totalMonths-(Math.abs(pickedMonth-currentMonth))) 
        //if not then we only subtract the picked months from current months
        months = currentMonth < pickedDate[1] ?
            (12 - (Math.abs(pickedDate[1] - currentMonth))) : 
              ((Math.abs(pickedDate[1] - currentMonth)));
        

        if (currentMonth <= pickedDate[1] && years > 0) {
            //if we are in october and the picked month is decimber then we did not complete a year so we take off 1 from years
            years = years - 1;
        }
       //calculating the day
        if (currentDay < pickedDate[2]) {
            days = 30 - (Math.abs(currentDay - pickedDate[2]));
            months=months-1;

        } else if (currentDay > pickedDate[2]) {
            days = ((Math.abs(pickedDate[2] - currentDay)));

        } else {
            days = 0;

        }
        console.log(today.getFullYear(), pickedDate[0])
        //side cases
        if (currentMonth == pickedDate[1] && currentDay >= pickedDate[2]) {
            months = 0;
            years = years + 1;
        }else if(currentMonth == pickedDate[1] && currentDay < pickedDate[2]){
            months = 11;
        }
        setYear(years);
        setMonth(months);
        setDays(days);
        console.log(years, months, days);

    }

    const onChangeHandle = (e) => {
        var dateArr = e.target.value.split('-').map(item => { return parseInt(item) });

        console.log(calculate(new Date(), dateArr));

    }
    console.log(new Date().toLocaleDateString())
    return (
    <div >
        <label className="datePicker-lable" >{lableText}</label>
        <input className="datePicker" type="date" name="begin" onChange={onChangeHandle}
            placeholder="dd-mm-yyyy"
            min="1940-01-01" max="2022-11-22" />
        <div className="resultContainer">

            <LifeCounts text="Years" number={year} />
            <LifeCounts text="Month" number={month} />
            <LifeCounts text="Days" number={day} />

        </div>
    </div>);
}

export default DatePicker;