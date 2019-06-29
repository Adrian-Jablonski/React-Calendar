import React, {Component} from 'react';
import Week from './Week';
import TableHeader from './TableHeader';
import TableHeading from './TableHeading';

import getCalendarDates from '../functions/calendarDatesCalc'
import monthList from '../data/monthList'

class Month extends Component {

    //TODO: pass current date on first render. Then pass dates based on previous or next month click

    state = {
        today: new Date(),
    }

    componentWillMount() {
        let date = new Date('02/02/2019');
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