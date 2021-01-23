import React, { useState } from "react";
import Booklist from "./Booklist";
import AddBook from "./AddBook";
import books from "./data/books.json";

function App() {
  const [newBooks, setNewBooks] = useState([]);

  const handleNewBook = (newBook, newAuthor) => {
    const obj = { title: newBook, author: newAuthor };
    setNewBooks((books) => books.concat(obj));
  };

  return (
    <div>
      <AddBook handle={handleNewBook} />
      <Booklist books={books} newBooks={newBooks} />
    </div>
  );
}

export default App;
