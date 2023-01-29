import { useState } from 'react';
import classNames from 'classnames';

import './ColorPicker.css';

export default function ColorPicker({ options }) {
  const [actieOptionIndx, setActieOptionIndx] = useState(0);

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === actieOptionIndx,
    });
  };
  const { label } = options[actieOptionIndx];
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">ColorPicker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          const optionClassName = makeOptionClassName(index);
          return (
            <button
              className={optionClassName}
              key={label}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setActieOptionIndx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

// class OldColorPicker extends PureComponent {
//   state = {
//     actieOptionIndx: 0,
//   };
//   setActiveIdx = index => {
//     this.setState({ actieOptionIndx: index });
//   };
//   makeOptionClassName = index => {
//     return classNames('ColorPicker__option', {
//       'ColorPicker__option--active': index === this.state.actieOptionIndx,
//     });
//   };
//   render() {
//     const { label } = this.props.options[this.state.actieOptionIndx];
//     return (
// <div className="ColorPicker">
//   <h2 className="ColorPicker__title">ColorPicker</h2>
//   <p>Выбран цвет: {label}</p>
//   <div>
//     {this.props.options.map(({ label, color }, index) => {
//       const optionClassName = this.makeOptionClassName(index);
//       return (
//         <button
//           className={optionClassName}
//           key={label}
//           style={{
//             backgroundColor: color,
//           }}
//           onClick={() => this.setActiveIdx(index)}
//         ></button>
//       );
//     })}
//   </div>
// </div>
//     );
//   }
// }

// export default ColorPicker;
