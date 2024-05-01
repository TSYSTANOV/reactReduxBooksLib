import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setFavoriteFilter,
} from "../redux/filterSlice/filterSlice";
import { useSearchParams } from "react-router-dom";

function Filter() {
  let [searchParams, setSearchParams] = useSearchParams();
  let { title, author } = Object.fromEntries(searchParams);
  const dispatch = useDispatch();
  if (title) {
    dispatch(setTitleFilter(title));
  }
  if (author) {
    dispatch(setAuthorFilter(author));
  }
  ////
  const titleFilter = useSelector((state) => state.filter.title);
  const authorFilter = useSelector((state) => state.filter.author);
  const favoriteFilter = useSelector((state) => state.filter.onlyFavorite);
  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
    if (e.target.value.length > 0) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        title: e.target.value,
      });
    } else {
      searchParams.delete("title");
      setSearchParams(searchParams);
    }
  }
  function handleAuthorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value));

    if (e.target.value.length > 0) {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        author: e.target.value,
      });
    } else {
      searchParams.delete("author");
      setSearchParams(searchParams);
    }
  }
  function handleFavoriteFilterChange(e) {
    dispatch(setFavoriteFilter(e.target.checked));
  }
  function handleResetFilter() {
    dispatch(resetFilters());
    setSearchParams({});
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handleFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button onClick={handleResetFilter}>Reset filters</button>
      </div>
    </div>
  );
}
export { Filter };
