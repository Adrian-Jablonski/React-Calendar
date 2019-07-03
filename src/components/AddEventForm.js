import React, {Component} from 'react';

class AddEventForm extends Component {

    state = {
        eventName: '',
        eventTime: ''
    }

    handleChanges(event) {
        this.setState({
            eventName: event.target.value
        });
    }

    render() {
        const {newEventDate, addEvent} = this.props;
        return (
            <form id="add-event-form">
                <div>
                    <label>Date: </label>
                    <input value={newEventDate} name="eventDate" disabled></input>
                </div>
                <div>
                    <label>Event Name</label>
                    <input type="text" name="eventName" onChange={(e) => this.handleChanges(e)}></input>
                </div>
                <div>
                    <label>Event Time</label>
                    <input type="time" name="eventTime"></input>
                </div>
                <button
                    onClick={() => addEvent(newEventDate, this.state.eventName)}
                >Add Event</button>
            </form>
        )
    }
}

export default AddEventForm;