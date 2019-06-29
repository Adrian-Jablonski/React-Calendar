import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft , faAngleRight} from "@fortawesome/free-solid-svg-icons";

class TableHeading extends Component  {

    render () {
        const {currentMonth, currentYear, currerMonthStart, goToPreviousMonth, goToNextMonth} = this.props;
        return (
            <div id="table-heading">
                <span className="arrow" 
                    onClick={() => goToPreviousMonth(currerMonthStart)} > <FontAwesomeIcon icon={faAngleLeft} /> </span>
                <h2 id="month-name"> 
                    {currentMonth} {currentYear}
                </h2>
                <span className="arrow" 
                    onClick={() => goToNextMonth(currerMonthStart)} > <FontAwesomeIcon icon={faAngleRight} /> </span>
            </div>
        )
    }
}

export default TableHeading;