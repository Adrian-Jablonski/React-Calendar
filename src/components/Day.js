import React from 'react';

const Day = ({dayNumb, isCurrentMonth}) => {
    return (
        <td className={(isCurrentMonth) ? 'day' : 'day current-month'}>{dayNumb}</td>
    )
}

export default Day;