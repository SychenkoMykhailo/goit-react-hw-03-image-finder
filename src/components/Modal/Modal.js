import React, { Component } from "react";
import styles from "./Modal.module.css";
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt, onClose } = this.props;
    const { overlay, modal } = styles;
    return (
      <>
        <div className={overlay} onClick={onClose}>
          <div className={modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
      </>
    );
  }
}
