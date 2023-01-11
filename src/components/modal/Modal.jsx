import './Modal.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');

        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
