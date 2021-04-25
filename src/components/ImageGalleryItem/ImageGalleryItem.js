import React, { Component } from "react";
import Modal from "../Modal";
import styles from "./ImageGalleryItem.module.css";
export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  render() {
    const { src, alt, largeSrc } = this.props;
    const { showModal } = this.state;
    const { imageGalleryItem, imageGalleryItem__image } = styles;
    return (
      <>
        <li className={imageGalleryItem}>
          <img
            src={src}
            alt={alt}
            className={imageGalleryItem__image}
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal src={largeSrc} alt={alt} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
