import React from "react";
import BookImage from "./BookImage";

const Book = (props) => {
  const { title, author } = props;

  let presentation = ""
  
  if(author) {
    presentation = (
      <p>
        {title}, by {author}
      </p>
    );
  } else {
    presentation = <p>{title} (no author given)</p>
  }


  return (
    <div className="book">
      <BookImage title={title} author={author} />
      {presentation}
    </div>
  );
};

export default Book;
