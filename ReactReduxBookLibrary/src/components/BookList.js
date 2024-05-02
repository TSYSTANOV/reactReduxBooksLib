import "./BookList.css";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar } from "react-icons/bs";
import { BsBookmarkStarFill } from "react-icons/bs";
import { toogleFavorite, deleteBook } from "../redux/bookSlice/bookSlice";
function BookList() {
  const books = useSelector((state) => state.books.books);
  const filterData = useSelector((state) => {
    return state.filter;
  });

  const dispatch = useDispatch();
  let filterBooks = books.filter((book) => {
    const titleCheck = book.title
      .toLowerCase()
      .includes(filterData.title.toLowerCase());
    const authorCheck = book.author
      .toLowerCase()
      .includes(filterData.author.toLowerCase());
    const favotiteCheck = filterData.onlyFavorite ? book.favorite : true;

    return titleCheck && authorCheck && favotiteCheck;
  });

  function handleFavorite(id) {
    dispatch(toogleFavorite(id));
  }
  function deleteHandler(id) {
    dispatch(deleteBook(id));
  }
  function higlightMatch(text, filter) {
    if (!filter) {
      return text;
    }
    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, index) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={index} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filterBooks.length === 0 ? (
        <p>No Books available</p>
      ) : (
        <ul>
          {filterBooks.map((book, index) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {index + 1}. {higlightMatch(book.title, filterData.title)} by{" "}
                  <strong>
                    {higlightMatch(book.author, filterData.author)}
                  </strong>
                  {` (${book.source})`}
                </div>
                <div className="book-actions">
                  <span
                    onClick={() => {
                      handleFavorite(book.id);
                    }}
                  >
                    {book.favorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button
                    onClick={() => {
                      deleteHandler(book.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export { BookList };
