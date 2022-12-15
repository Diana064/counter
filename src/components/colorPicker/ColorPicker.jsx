import { Component } from 'react';

import './ColorPicker.css';
class ColorPicker extends Component {
  state = {
    actieOptionIndx: 0,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.actieOptionIndx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };
  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                className={optionClassName}
                key={label}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
