import React from 'react';

const EventList = ({event, eventNumb, eventLen}) => {

    let eventsLeft = eventLen - 2;

    return (
        <p>{(eventNumb < 3) ? event.eventName : (eventsLeft > 1 ) ? eventsLeft + ' more events' : eventsLeft + ' more event'}</p>
    )
}

export default EventList;