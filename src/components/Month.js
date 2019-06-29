import React, {Component} from 'react';
import Week from './Week';
import TableHeader from './TableHeader';

import getCalendarDates from '../functions/calendarDatesCalc'

class Month extends Component {

    state = {
        calendarDates: getCalendarDates(new Date()),
        currentMonth: new Date().getMonth()
    }

    
    render() {

        let weeksArr = [];
        for (var i = 0; i < 6; i++) {
            weeksArr.push(
            <Week
                weekNumb={i}
                key={i}
                calendarDates= {this.state.calendarDates}
                currentMonth={this.state.currentMonth}
            ></Week>)
        }
        return (
            <div id="calendar">
                <h2 id="month-name">June 2019</h2>
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