import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import config from "../../config/config";
import Button from "../../components/button";
import Header from "../../components/header";
import Footer from "../../components/footer";
import service from "../../services/booksService";
import Spinner from "../../components/spinner";
import { useHistory } from "react-router-dom";

const DetailsPage = () => {
  const [isAdmin, setisAdmin] = useState(false);
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const bookId = window.location.pathname.split("/")[2];
    if (sessionStorage.getItem("id") === config.adminId) {
      setisAdmin(true);
    }
    service.getBookDetails(bookId).then((data) => setBook(data));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <div id={styles.container}>
          <div className="col-lg-4">
            <h3 className="card-header">{book.title}</h3>
            <div className="card-body">
              <h4 className="card-title">{book.subtitle}</h4>
              <h4 className="card-title">Author: {book.author}</h4>
            </div>
            <img
              className={styles.image}
              src={book.imageUrl}
              alt={book.title}
            />
            <div className="card-body">
              <p className="card-text">{book.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">ISBN: {book.isbn}</li>
              <li className="list-group-item">Publisher: {book.publisher}</li>
              <li className="list-group-item">
                Piblished on: {book.published}
              </li>
              <li className="list-group-item">Pages: {book.pages}</li>
              <li className="list-group-item">
                <a href={book.website}>Book Official Website</a>
              </li>
            </ul>
            {isAdmin ? (
              <Button
                name="EDIT"
                onClick={() => {
                  history.push(`/edit/${book._id}`);
                }}
              />
            ) : null}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetailsPage;
