import React from "react";
import Book from "../../components/book";
import Header from "../../components/header";
import Footer from "../../components/footer";

const BooksPage = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <Book
          title="Eloquent JavaScript, Second Edition"
          subtitle="A Modern Introduction to Programming"
          author="Marijn Haverbeke"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/91m4TmoRMxL.jpg"
          details=""
        />
        <Book
          title="Learning JavaScript Design Patterns"
          subtitle="A JavaScript and jQuery Developer's Guide"
          author="Addy Osmani"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/71wDOMQ7lIL.jpg"
          details=""
        />
        <Book
          title="Speaking JavaScript"
          subtitle="An In-Depth Guide for Programmers"
          author="Axel Rauschmayer"
          imageUrl="https://kbimages1-a.akamaihd.net/154525e0-8a6c-4912-9993-310dc6d5ec63/1200/1200/False/speaking-javascript.jpg"
          details=""
        />
        <Book
          title="Eloquent JavaScript, Second Edition"
          subtitle="A Modern Introduction to Programming"
          author="Marijn Haverbeke"
          imageUrl="https://images-na.ssl-images-amazon.com/images/I/91m4TmoRMxL.jpg"
          details=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default BooksPage;
