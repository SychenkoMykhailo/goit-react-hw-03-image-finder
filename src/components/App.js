import React, { Component } from "react";
import "./App.css";
// Components
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Error from "./Error";
// API
import pixabayAPI from "./services/pixabayAPI";
// App
class App extends Component {
  state = {
    images: [],
    error: false,
    loading: false,
    searchQuery: "",
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;
    if (searchQuery !== prevState.searchQuery && searchQuery) {
      this.setState({ loading: true, images: [] });
      this.fetchPictures();
    }
    if (currentPage !== prevState.currentPage) {
      this.fetchPictures();
    }
  }

  loadMore = () => {
    this.setState((prevState) => {
      return { currentPage: prevState.currentPage + 1, loading: true };
    });
  };

  fetchPictures = () => {
    const { searchQuery, currentPage } = this.state;
    if (searchQuery) {
      pixabayAPI
        .fetchPicturesWithQuery(searchQuery, currentPage)
        .then((images) => {
          this.setState({ images: [...this.state.images, ...images.hits] });
        })
        .catch((error) => {
          this.setState({ error: error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.form.searchInput.value,
      currentPage: 1,
    });
  };

  render() {
    const { images, loading, error } = this.state;
    return (
      <div className="maincontainer">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {!loading && images.length > 0 && <Button loadMore={this.loadMore} />}
        {error && <Error error={error} />}
      </div>
    );
  }
}

export default App;
