import React, {Component} from 'react';
import Month from './Month';

class App extends Component {

  state = {
    events: {}
  }

  addEvent = (date) => {
    console.log("Adding Event Form " + date);
    this.setState(prevState => {
      if (prevState.events[date] === undefined) {
        prevState.events[date] = [];
      }
      prevState.events[date].push('Event');
      return {
        events: prevState.events
      }
    })
}

  render() {
    return (
      <div>
          <Month
            events= {this.state.events}
            addEvent={this.addEvent}
          ></Month>
      </div>
    );
  }
}

export default App;


//TODO: Ability to add an event. Store events in a seperate object
//TODO: Create component for showing daily events in each date. Hide calendar icon and disable add event click if hovering over an event
//TODO: Events for a date being added twice if the day number appears in a previous month or next month on calendar