import React from 'react'

const AddBook = (props) => {

    const handleNewBook = props.handle
    let textInput = React.createRef();

    return (
      <form>
        Add a book:
        <input type="text" ref={textInput} />
        <button
          type="reset"
          onClick={() => handleNewBook(textInput.current.value)}
        >
          Add
        </button>
      </form>
    );
}

export default AddBook
