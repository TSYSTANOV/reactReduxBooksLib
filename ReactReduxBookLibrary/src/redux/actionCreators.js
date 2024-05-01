import * as actionTypes from "./actionTypes";
function addBook(newBook) {
  return {
    type: actionTypes.ADD_BOOK,
    payload: newBook,
  };
}
function deleteBook(id) {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: id,
  };
}
function addFavotite(id) {
  return {
    type: actionTypes.TOGGLE_BOOK,
    payload: id,
  };
}
export { addBook, deleteBook, addFavotite };
