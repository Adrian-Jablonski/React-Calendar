import React from 'react';
import Day from './Day';

const Week = ({weekNumb, calendarDates}) => {

    let dayArr = [];
    for (var i = 0; i < 7; i++) {
        let calBoxNumber = (i+1) + (weekNumb * 7) - 1;
        let calDatesLen = calendarDates.length;
        let dayNumber = (calBoxNumber < calDatesLen) ? calendarDates[calBoxNumber].getDate() : (calBoxNumber - calDatesLen) + 1;
        dayArr.push(
        <Day
            dayNumb={dayNumber}
            key={dayNumber + "-" + weekNumb}
        ></Day>)
    }

    return (
        <tr>
            {dayArr}
        </tr>
        
    )
}

export default Week;