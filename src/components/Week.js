import React from 'react';
import Day from './Day';

const Week = ({weekNumb, calendarDates, currentMonth, currentYear, today, events, addEvent}) => {

    let dayArr = [];
    for (var i = 0; i < 7; i++) {
        let calBoxNumber = (i+1) + (weekNumb * 7) - 1;
        
        let curDate = calendarDates[calBoxNumber];

        let calDatesLen = calendarDates.length;

        let dayNumber = curDate.getDate();

        let isCurrentMonth = (calBoxNumber < calDatesLen) && currentMonth === curDate.getMonth();

        let isCuurrentDate = calBoxNumber < calDatesLen && today.getMonth() === curDate.getMonth() && today.getDate() === dayNumber;

        let currentDate = `${currentMonth + 1}/${dayNumber}/${currentYear}`
        let currentDateEvents = events[currentDate];

        dayArr.push(
        <Day
            dayNumb={dayNumber}
            key={calBoxNumber}
            isCurrentMonth={isCurrentMonth}
            isCuurrentDate={isCuurrentDate}
            currentDateEvents={currentDateEvents}
            addEvent={addEvent}
            currentDate={currentDate}
        ></Day>)
    }

    return (
        <tr>
            {dayArr}
        </tr>
        
    )
}

export default Week;