import React from "react";
import errorGif from "../gifs/errorGif.gif";
import styles from "./Error.module.css";
export default function Error({ error }) {
  const { container } = styles;
  return (
    <div className={container}>
      <div>!!! Error !!!</div>
      <div>
        <img src={errorGif} alt="error" />
      </div>
      <div>{error.message}</div>
    </div>
  );
}
