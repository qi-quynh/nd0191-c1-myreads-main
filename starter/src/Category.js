import Book from "./Book";
const Category = ({ information, listBook, setListBook }) => {
  const booksByCategory = listBook.filter(
    (book) => book.shelf === information.key
  );
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{information.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksByCategory &&
            booksByCategory.map((book, index) => (
              <li key={index}>
                <Book book={book} setListBook={setListBook} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Category;
