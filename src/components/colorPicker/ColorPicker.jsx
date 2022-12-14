import { Component } from 'react';
import { ColorBlock, ColorWrapper } from './ColorPicker.styled';

class ColorPicker extends Component {
  render() {
    return (
      <div>
        <h2>ColorPicker</h2>
        <ColorWrapper>
          {this.props.options.map(({ label, color }) => (
            <ColorBlock
              key={label}
              style={{ backgroundColor: color }}
            ></ColorBlock>
          ))}
        </ColorWrapper>
      </div>
    );
  }
}

export default ColorPicker;
