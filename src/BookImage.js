import React, { useState, useEffect } from "react";
import placeholder from './images/cover.png'

export default function BookImage(props) {
  const { title, author } = props;

  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  const api = url + title
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(api)
    const data = await fetch(api);
    const json = await data.clone().json();

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
          }
        } else {
          if (formatDate >= 1950) {
            setImgSrc(book.volumeInfo.imageLinks.thumbnail);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <img src={imgSrc} className="image" alt="cover" />;
}
