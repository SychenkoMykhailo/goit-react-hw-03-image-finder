import axios from "axios";
const fetchPicturesWithQuery = (searchQuery, page = 1) => {
  const key = "21267316-e2b69c8f3d224355a08642050";
  const link = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&
	key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(link).then((res) => res.data);
};
const fetches = {
  fetchPicturesWithQuery,
};
export default fetches;
