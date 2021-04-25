import React from "react";
import styles from "./Searchbar.module.css";
export default function Searchbar({ onSubmit }) {
  const {
    searchbar,
    searchForm,
    searchForm_button,
    searchForm_button_label,
    searchForm_input,
  } = styles;
  return (
    <>
      <header className={searchbar}>
        <form className={searchForm}>
          <button
            type="submit"
            className={searchForm_button}
            onClick={onSubmit}
          >
            <span className={searchForm_button_label}>Search</span>
          </button>
          <input
            className={searchForm_input}
            name="searchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}
