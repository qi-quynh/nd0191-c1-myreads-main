import "./App.css";
import { useState, useEffect } from "react";
import * as Api from "./BooksAPI";
import Category from "./Category";
import { Link } from "react-router-dom";

const categories = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" },
];

const App = () => {
  const [listBook, setListBook] = useState([]);
  useEffect(() => {
    Api.getAll().then((booksAPI) => {
      setListBook(booksAPI);
    });
  }, []);
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map((category, index) => (
              <Category
                key={index}
                information={category}
                listBook={listBook}
                setListBook={setListBook}
              ></Category>
            ))}
          </div>
          <div className="open-search">
            <div className="open-search">
              <Link to="/search">Add Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
