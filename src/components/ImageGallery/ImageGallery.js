import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";
export default function ImageGallery({ images }) {
  return (
    <>
      <ul className={styles.imageGallery}>
        {images &&
          images.map(({ webformatURL, tags, largeImageURL, id }) => (
            <ImageGalleryItem
              largeSrc={largeImageURL}
              src={webformatURL}
              alt={tags}
              key={id}
            />
          ))}
      </ul>
    </>
  );
}
