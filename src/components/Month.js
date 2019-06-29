import React, {Component} from 'react';
import Week from './Week';
import TableHeader from './TableHeader';
import TableHeading from './TableHeading';

import getCalendarDates from '../functions/calendarDatesCalc'
import monthList from '../data/monthList'

class Month extends Component {

    state = {
        today: new Date(),
    }

    componentWillMount() {
        let dateStr = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`; // need to pass this into new Date for date variable because new Date() alone gives an error
        let date = new Date(dateStr);
        this.showMonth(date);
    }

    showMonth = (date) => {
        this.setState(() => ({
            currerMonthStart: new Date(date.getFullYear(), date.getMonth(), 1),
            calendarDates: getCalendarDates(date),
            currentMonth: date.getMonth(),
            currentYear: date.getFullYear()
        }))
    }

    goToPreviousMonth = (currerMonthStart) => {
        let date = new Date(currerMonthStart);
        date.setDate(currerMonthStart.getDate() - 1);
        this.showMonth(date);
    }

    goToNextMonth = (currerMonthStart) => {
        let date = new Date(currerMonthStart);
        date.setDate(currerMonthStart.getDate() + 31);
        this.showMonth(date);
    }
    
    render() {
        let weeksArr = [];
        let weeks = this.state.calendarDates.length / 7;
        for (var i = 0; i < weeks; i++) {
            weeksArr.push(
            <Week
                weekNumb={i}
                key={i}
                calendarDates= {this.state.calendarDates}
                currentMonth={this.state.currentMonth}
                today={this.state.today}
            ></Week>)
        }
        return (
            <div id="calendar">
                <TableHeading
                    currentMonth={monthList[this.state.currentMonth]}
                    currentYear={this.state.currentYear}
                    currerMonthStart={this.state.currerMonthStart}
                    goToPreviousMonth={this.goToPreviousMonth}
                    goToNextMonth={this.goToNextMonth}
                ></TableHeading>
                <table className="month">
                    <thead>
                        <TableHeader></TableHeader>
                    </thead>
                    <tbody>
                        {weeksArr}
                    </tbody>
                    
                </table>
            </div>
    
        )
    }
}


export default Month;