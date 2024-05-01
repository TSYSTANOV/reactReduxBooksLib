import "./App.css";
import React from "react";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { Filter } from "./components/Filter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Book Library App</h1>
        </header>
        <main className="app-main">
          <div className="app-left-column">
            <BookForm />
          </div>
          <div className="app-right-column">
            <Filter />
            <BookList />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
