import React from "react";
import BookImage from "./BookImage";

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="book">
      <BookImage title={title} author={author} />
      <p>
        {title}, by {author}
      </p>
    </div>
  );
};

export default Book;
