import React, { useState, useEffect, useRef } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const intervalId = useRef(null);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div>
      <div className="Clock__face">{time}</div>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

// export default class OldClock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log('setInterval');

// this.intervalId = setInterval(
//   () => this.setState({ time: new Date().toLocaleTimeString() }),
//   1000
// );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <div className="Clock__face">{this.state.time}</div>;
//   }
// }
