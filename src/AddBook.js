import React from 'react'

const AddBook = (props) => {

    const handleNewBook = props.handle
    let titleInput = React.createRef();
    let authorInput = React.createRef();

    return (
      <form>
        Add a book:
        <input type="text" ref={titleInput} placeholder="Title"/>
        <input type="text" ref={authorInput} placeholder="Author" />
        <button
          type="reset"
          onClick={() => handleNewBook(titleInput.current.value, authorInput.current.value)}
        >
          Add
        </button>
      </form>
    );
}

export default AddBook
