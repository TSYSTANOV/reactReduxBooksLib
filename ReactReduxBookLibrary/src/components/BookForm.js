import { useState } from "react";
import "./BookForm.css";
import { useDispatch, useSelector } from "react-redux";
import booksData from "../data/books.json";
import { createBookWithID } from "../utils/CreateBookWithID";
import { addBook, fetchBook } from "../redux/bookSlice/bookSlice";
import { thunkFunction } from "../redux/bookSlice/bookSlice";
import { setError } from "../redux/ErrorSlice/errorSlice";
import { FaSpinner } from "react-icons/fa";
function BookForm() {
  const isLoading = useSelector((state) => state.books.isLoadingViaAPI);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  function handleAddRandomBook() {
    const randomBook = booksData[Math.floor(Math.random() * booksData.length)];
    dispatch(addBook(createBookWithID(randomBook, "random")));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
      };
      dispatch(addBook(createBookWithID(book, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("Enter title and author fill"));
    }
  }

  function handleAddRandomBookViaAPI() {
    // dispatch(fetchBook("http://localhost:4000/random-book-delayed"));
    dispatch(thunkFunction({ title: "SpiderMan", year: 2008 }));
  }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button
          type="button"
          onClick={handleAddRandomBookViaAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              {" "}
              <p>Loading Book</p>
              <FaSpinner className="spinner" />{" "}
            </>
          ) : (
            "Add Random with API"
          )}
        </button>
      </form>
    </div>
  );
}
export { BookForm };
