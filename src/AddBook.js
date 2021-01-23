import React from 'react'

const AddBook = (props) => {

    const handleNewBook = props.handle
    let titleInput = React.createRef();
    let authorInput = React.createRef();

    return (
      <div className="add-book">
        <span className="add-book-title">Add a book:</span>
        <form>
          <input type="text" ref={titleInput} placeholder="Title" />
          <input type="text" ref={authorInput} placeholder="Author" />
          <button
            type="reset"
            onClick={() =>
              handleNewBook(titleInput.current.value, authorInput.current.value)
            }
          >
            Add
          </button>
        </form>
      </div>
    );
}

export default AddBook
