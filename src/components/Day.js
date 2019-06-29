import React from 'react';

const Day = ({dayNumb, isCurrentMonth, isCuurrentDate}) => {
    let dayClass = 'day';

    if (isCuurrentDate) {
        dayClass = 'day current-date'
    }
    else if (!isCurrentMonth) {
        dayClass = 'day current-month'
    }

    return (
        <td className={dayClass}>{dayNumb}</td>
    )
}

export default Day;