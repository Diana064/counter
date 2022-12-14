import React from 'react';
import { DropDownBlock, DropDownMenu } from './DropDown.styled';

class DropDown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  render() {
    const { toggle } = this;
    const { visible } = this.state;
    return (
      <DropDownBlock>
        <button type="button" onClick={toggle}>
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <DropDownMenu>Випадающее меню</DropDownMenu>}
      </DropDownBlock>
    );
  }
}
export default DropDown;
