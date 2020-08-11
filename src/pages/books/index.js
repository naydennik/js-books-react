import React, { useEffect, useState } from "react";
import Book from "../../components/book";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Spinner from "../../components/spinner";
import API from "../../config/api";
import config from "../../config/config";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `/appdata/${config.kinveyAppKey}/books`;
    const token = sessionStorage.getItem("authtoken");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Kinvey ${token}`,
    };
    let isMounted = true;
    API.get(url, { headers }).then(({ data }) => {
      if (isMounted) {
        setBooks(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const renderBooks = books.map((book) => {
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

      <Footer />
    </div>
  );
};

export default BooksPage;
