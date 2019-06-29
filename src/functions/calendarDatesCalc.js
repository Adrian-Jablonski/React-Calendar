function getCalendarDates(calDate) {
    let date = new Date(calDate);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let monthStartDay = firstDay.getDay();

    let calendarDates = [];

    date.setDate(firstDay.getDate() - monthStartDay);   // finds sunday before first day of month

    while (date <= lastDay) {
        let newDate = new Date(date);
        calendarDates.push(newDate);
        date.setDate(newDate.getDate() + 1);
    }

    return calendarDates
}

export default getCalendarDates;