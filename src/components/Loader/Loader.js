import React from "react";
import searchPicture from "../gifs/Search.gif";
import styles from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={styles.loader}>
      <img src={searchPicture} alt="loading" />
      <div>Loading...</div>
    </div>
  );
}
