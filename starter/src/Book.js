import * as Api from "./BooksAPI";
const Book = ({ book, setListBook, showSearchPage }) => {
  const onCategoryChange = (event) => {
    if (showSearchPage) {
      Api.update(book, event.target.value);
    } else {
      Api.update(book, event.target.value).then((response) =>
        Api.getAll().then((books) => {
          setListBook(books);
        })
      );
    }
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={onCategoryChange}>
            <option value="moveTo" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.map((a) => `${a},`)}
      </div>
    </div>
  );
};
export default Book;
