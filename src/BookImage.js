import React, { useState, useEffect } from "react";
import placeholder from "./images/cover.png";
import { APIData } from "./utils/fetchData.utils";

export default function BookImage(props) {
  const { title, author } = props;

  const [imgSrc, setImgSrc] = useState(placeholder);

  function getBookInfo(title, author) {
    APIData(title, author).then((json) => {
      try {
        for (let book of json.items) {
          const date = book.volumeInfo.publishedDate;
          const formatDate = date.substr(0, 4);

          if (author) {
            if (
              formatDate >= 1950 &&
              author.length > 0 &&
              book.volumeInfo.authors[0] === author
            ) {
              setImgSrc(book.volumeInfo.imageLinks.thumbnail);
              break;
            } else if (
              author.length > 0 &&
              book.volumeInfo.authors[0] === author
            ) {
              setImgSrc(book.volumeInfo.imageLinks.thumbnail);
              break;
            }
          } else {
            if (formatDate >= 1950) {
              setImgSrc(book.volumeInfo.imageLinks.thumbnail);
              break;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    getBookInfo(title, author);
  }, []);

  return <img src={imgSrc} className="image" alt="cover" />;
}
