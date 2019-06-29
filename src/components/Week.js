import React from 'react';
import Day from './Day';

const Week = ({weekNumb, calendarDates, currentMonth, today}) => {

    let dayArr = [];
    for (var i = 0; i < 7; i++) {
        let calBoxNumber = (i+1) + (weekNumb * 7) - 1;
        
        let curDate = calendarDates[calBoxNumber];

        let calDatesLen = calendarDates.length;

        let dayNumber = curDate.getDate();

        let isCurrentMonth = (calBoxNumber < calDatesLen) && currentMonth === curDate.getMonth();

        let isCuurrentDate = calBoxNumber < calDatesLen && today.getMonth() === curDate.getMonth() && today.getDate() === dayNumber;

        dayArr.push(
        <Day
            dayNumb={dayNumber}
            key={calBoxNumber}
            isCurrentMonth={isCurrentMonth}
            isCuurrentDate={isCuurrentDate}
        ></Day>)
    }

    return (
        <tr>
            {dayArr}
        </tr>
        
    )
}

export default Week;