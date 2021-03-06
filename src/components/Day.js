import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

import EventList from './EventList';

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
        let dayClass = setDayClass(isCurrentMonth, isCuurrentDate);

        let btnClassName = (this.state.visible) ? 'plus-button' : 'plus-button hide';

        let eventArr = setEventArr(currentDateEvents);

        return (
            <td className={dayClass}
                onMouseEnter={() => this.displayPlusButton()} 
                onMouseLeave={() => this.hidePlusButton()}
                onClick={() => this.props.showEventForm(currentDate)}
            >
                <span>{dayNumb}</span>
                <button className={btnClassName}>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </button>
                
                {eventArr}
                {/* <EventList
                    currentDateEvents= {currentDateEvents}
                >
                </EventList> */}
            </td>
        )
    }
}

export default Day;

function setDayClass(isCurrentMonth, isCuurrentDate) {
    let dayClass = 'day';

    if (isCuurrentDate) {
        dayClass = 'day current-date'
    }
    else if (!isCurrentMonth) {
        dayClass = 'day current-month'
    }

    return dayClass;
}

function setEventArr(currentDateEvents) {
    let eventArr = [];
    if (currentDateEvents) {
        let eventLen = currentDateEvents.length;
        for (let i = 0; i < Math.min(eventLen, 3); i++){
            eventArr.push(
                <EventList
                    event= {currentDateEvents[i]}
                    eventNumb={i+1}
                    eventLen={eventLen}
                    key={i}
                >
                </EventList>
            )
        }
    }
    return eventArr;
}