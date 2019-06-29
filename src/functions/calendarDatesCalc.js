function getCalendarDates(calDate) {
    let fromDate = new Date(calDate);
    let firstDay = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
    let lastDay = new Date(fromDate.getFullYear(), fromDate.getMonth() + 1, 1);
    
    let monthStartDay = firstDay.getDay();
    let monthEndDay = lastDay.getDay();

    lastDay.setDate(lastDay.getDate() + (6 - monthEndDay))
    let calendarDates = [];

    fromDate.setDate(firstDay.getDate() - monthStartDay);   // finds sunday before first day of month   

    while (fromDate <= lastDay) {
        let newDate = new Date(fromDate);
        calendarDates.push(newDate);
        fromDate.setDate(newDate.getDate() + 1);
    }

    return calendarDates
}

export default getCalendarDates;