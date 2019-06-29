import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

class Day extends Component {

    state = {
        visible: false,
    }

    displayPlusButton = () => {
        this.setState(() => {
            return {
                visible: true
            }
        })
    }

    hidePlusButton = () => {
        this.setState(() => {
            return {
                visible: false
            }
        })
    }

    render() {
        const {dayNumb, isCurrentMonth, isCuurrentDate, currentDate, currentDateEvents} = this.props
        let dayClass = 'day';

        if (isCuurrentDate) {
            dayClass = 'day current-date'
        }
        else if (!isCurrentMonth) {
            dayClass = 'day current-month'
        }

        let btnClassName = 'plus-button';
        if (!this.state.visible) {
            btnClassName = 'plus-button hide';
        }

        return (
            <td className={dayClass}
                onMouseEnter={() => this.displayPlusButton()} 
                onMouseLeave={() => this.hidePlusButton()}
                onClick={() => this.props.addEvent(currentDate)}
            >
                <span>{dayNumb}</span>
                <button className={btnClassName}>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </button>
                <p>{(currentDateEvents) ? currentDateEvents.length + " Events" : ""}</p>
            </td>
        )
    }
}

export default Day;