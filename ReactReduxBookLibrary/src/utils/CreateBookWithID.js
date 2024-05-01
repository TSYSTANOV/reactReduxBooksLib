import { v4 as uuidv4 } from "uuid";
function createBookWithID(book, source) {
  return {
    ...book,
    source,
    id: uuidv4(),
    favorite: false,
  };
}
export { createBookWithID };
