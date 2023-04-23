import { useState, useEffect } from "react";
import Book from "./Book";
import * as Api from "./BooksAPI";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [booksBySearch, setBooksBySearch] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const onSearch = () => {
    if (query.length !== 0) {
      Api.search(query).then((booksBySearch) => {
        if (!booksBySearch.error) {
          Api.getAll().then((mine) => {
            setBooksBySearch(setNoneCategory(booksBySearch, mine));
          });
        } else {
          setBooksBySearch([]);
        }
      });
    } else if (query.length === 0) {
      setBooksBySearch([]);
    }
  };

  const setNoneCategory = (booksBySearch, books) => {
    return booksBySearch.map((book) => {
      for (const element of books) {
        if (element.id === book.id) {
          return { ...book, shelf: element.shelf };
        }
      }
      return { ...book, shelf: "none" };
    });
  };

  useEffect(() => {
    onSearch();
  }, [query]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => navigate("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksBySearch &&
            booksBySearch.map((book, index) => (
              <Book book={book} showSearchPage />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
