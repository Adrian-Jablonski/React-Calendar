import React, {Component} from 'react';
import Month from './Month';

class App extends Component {

  render() {
    return (
      <div>
          <Month></Month>
      </div>
    );
  }
}

export default App;

//TODO: Ability to go to next or previous month
//TODO: Ability to add an event. Store events in a seperate object