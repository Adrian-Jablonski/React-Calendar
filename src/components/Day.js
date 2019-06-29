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
        const {dayNumb, isCurrentMonth, isCuurrentDate} = this.props
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

        // Add onMouseEnter
        return (
            <td className={dayClass}
                onMouseEnter={() => this.displayPlusButton()} 
                onMouseLeave={() => this.hidePlusButton()}
            >
                <span>{dayNumb}</span>
                <button className={btnClassName}>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </button>
            </td>
        )
    }
}

export default Day;