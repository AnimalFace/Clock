import React from 'react';
import { ajax } from 'jquery';
import Styles from './Styles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Hours : null,
      minutes : null,
      seconds : null
    };

  }

  componentDidMount() {
    setInterval(() => {
      let date = new Date();
      this.setState({
        hours : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
      })
    }, 1000)
  }

  ampm(hours) {
    if (hours >= 12) {
      return 'pm'
    }
    return 'am'
  }

  notMilitaryTime(hours) {
    if (hours > 12) {
      return hours - 12;
    }
    return hours;
  }

  seconds(seconds) {
    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <Styles>
        <h2>Digital Clock</h2>
        <div className="clockContainer">
          <div className="timeContainer">
          <div className="hoursAndMinutes">
          {`${this.notMilitaryTime(hours)}:${minutes}`}
          </div>
          <div className="seconds">
            {`:${this.seconds(seconds)} ${this.ampm(hours)}`}
          </div>
          </div>



        </div>

      </Styles>
    );
  }
}

export default App;
