import React, { useState } from "react";
import ReactDom from "react-dom";
import "./style/style.css";
import Booklist from "./Booklist";
import AddBook from "./AddBook";
import books from "./data/books.json";

function App() {
  const [newBooks, setNewBooks] = useState([]);

  const handleNewBook = (newBook, newAuthor) => {
    const obj = { "title": newBook, "author": newAuthor };
    setNewBooks((books) => books.concat(obj));
  };

  return (
    <div>
      <Booklist books={books} newBooks={newBooks} />
      <AddBook handle={handleNewBook} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
