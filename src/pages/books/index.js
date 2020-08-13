import React, { useEffect, useState } from "react";
import Book from "../../components/book";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Spinner from "../../components/spinner";
import Pagination from "../../components/pagination";
import API from "../../config/api";
import config from "../../config/config";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);

  useEffect(() => {
    const url = `/appdata/${config.kinveyAppKey}/books`;
    const token = sessionStorage.getItem("authtoken");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Kinvey ${token}`,
    };
    let isMounted = true;

    const fetchBooks = async () => {
      setIsLoading(true);
      const res = await API.get(url, { headers }).then(({ data }) => {
        if (isMounted) {
          setBooks(data);
          setIsLoading(false);
        }
      });
    };

    fetchBooks();
    return () => {
      isMounted = false;
    };
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (bookNumber) => setCurrentPage(bookNumber);

  const renderBooks = currentBooks.map((book) => {
    return (
      <Book
        key={book._id}
        title={book.title}
        subtitle={book.subtitle}
        author={book.author}
        imageUrl={book.imageUrl}
        id={book._id}
      />
    );
  });

  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <div className="row">{renderBooks}</div>}
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default BooksPage;
