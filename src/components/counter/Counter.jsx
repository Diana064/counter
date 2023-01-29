import React, { useReducer } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.playload };

    case 'decrement':
      return { ...state, count: state.count - action.playload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}
export default function Counter() {
  // const [value, setValue] = useState(0);
  const [state, setValue] = useReducer(countReducer, { count: 0 });
  // const handleIncrement = () => {
  //   setValue(prevState => prevState + 1);
  // };
  // const handleDecrement = () => {
  //   setValue(prevState => prevState - 1);
  // };
  return (
    <div>
      <Value value={state.count} />
      <Controls
        onDecrement={() => setValue({ type: 'decrement', playload: 1 })}
        onIncrement={() => setValue({ type: 'increment', playload: 1 })}
      />
    </div>
  );
}

// class OldCounter extends React.Component {
//   static defaultProps = {
//     initialValue: 12,
//   };
//   state = {
//     value: this.props.initialValue,
//   };
// handleIncrement = () => {
//   this.setState(prevState => {
//     return {
//       value: prevState.value + 1,
//     };
//   });
// };
// handleDecrement = () => {
//   this.setState(prevState => {
//     return {
//       value: prevState.value - 1,
//     };
//   });
// };
//   render() {
//     return (
// <div>
//   <Value value={this.state.value} />
//   <Controls
//     onDecrement={this.handleDecrement}
//     onIncrement={this.handleIncrement}
//   />
// </div>
//     );
//   }
// }

// export default Counter;
