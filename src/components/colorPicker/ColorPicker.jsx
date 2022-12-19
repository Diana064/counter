import { Component } from 'react';

import './ColorPicker.css';
class ColorPicker extends Component {
  state = {
    actieOptionIndx: 0,
  };
  setActiveIdx = index => {
    this.setState({ actieOptionIndx: index });
  };
  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.actieOptionIndx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };
  render() {
    const { label } = this.props.options[this.state.actieOptionIndx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>Выбран цвет: {label}</p>
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
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
