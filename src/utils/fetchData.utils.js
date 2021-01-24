export const APIData = async (title, author) => {
  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  const api = url + title;

  const data = await fetch(api);
  const json = await Promise.resolve(data.clone().json());

  return json;
};
