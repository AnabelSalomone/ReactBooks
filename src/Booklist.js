import React from "react";
import Book from "./Book";

const Booklist = (props) => {

    const books = props.books
    const newBooks = props.newBooks

    const total = books.concat(newBooks)

    return (
      <section className="booklist">
        {total.map((book) => {
          return <Book id={book.title} title={book.title} author={book.author} />;
        })}
      </section>
    );
};

export default Booklist