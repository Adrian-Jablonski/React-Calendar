import React, {Component} from 'react';
import Month from './Month';
import AddEventForm from './AddEventForm';

class App extends Component {

  state = {
    events: {},
    newEventDate: null
  }

  showEventForm = (date) => {
    console.log("Show event Form " + date);
    this.setState(() => {
      return {
        newEventDate: date
      }
    })
  }

  addEvent = (date, eventName) => {
    console.log("Adding Event Form " + date + " " + eventName);
    this.setState(prevState => {
      if (prevState.events[date] === undefined) {
        prevState.events[date] = [];
      }
      prevState.events[date].push({eventName: eventName});
      return {
        events: prevState.events,
        newEventDate: null
      }
    })
}

  render() {
    const eventForm = (this.state.newEventDate) ? <AddEventForm
      newEventDate={this.state.newEventDate}
      addEvent={this.addEvent}
    ></AddEventForm> 
    : null;

    return (
      <div>
          <Month
            events= {this.state.events}
            showEventForm={this.showEventForm}
          ></Month>
          {eventForm}
      </div>
    );
  }
}

export default App;


//TODO: Ability to add an event. Store events in a seperate object
//TODO: Create component for showing daily events in each date. Hide calendar icon and disable add event click if hovering over an event
//TODO: Events for a date being added twice if the day number appears in a previous month or next month on calendar