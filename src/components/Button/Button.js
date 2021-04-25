import React from "react";
import styles from "./Button.module.css";
export default function Button({ loadMore }) {
  return (
    <button type="button" className={styles.button} onClick={loadMore}>
      Load More
    </button>
  );
}
