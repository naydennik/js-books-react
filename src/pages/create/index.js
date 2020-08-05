import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import InputCreate from "../../components/input-create";
import styles from "./index.module.css";

const CreatePage = () => {
  return (
    <div>
      <Header />
      <div className="container" id={styles.container}>
        <div className="row space-top">
          <div className="col-md-12">
            <h1>Create Book</h1>
            <br />
          </div>
        </div>
        <form>
          <div className="row space-top">
            <div className="col-md-4">
              <InputCreate
                title="Book Title"
                id="title"
                type="text"
                placeholder="Please enter the book's title..."
                name="title"
                onChange={() => {}}
              />
              <InputCreate
                title="Book Subtitle"
                id="subtitle"
                type="text"
                placeholder="Please enter the book's subtitle..."
                name="subtitle"
                onChange={() => {}}
              />
              <InputCreate
                title="Author"
                id="author"
                type="text"
                placeholder="Please enter the book's author..."
                name="author"
                onChange={() => {}}
              />
              <InputCreate
                title="Image"
                id="image"
                type="text"
                placeholder="Please enter the book's image link..."
                name="image"
                onChange={() => {}}
              />
              <InputCreate
                title="Description"
                id="description"
                type="text"
                placeholder="Please enter the book's description..."
                name="description"
                onChange={() => {}}
              />
              <InputCreate
                title="ISBN"
                id="isbn"
                type="number"
                placeholder="Please enter the book's ISBN..."
                name="isbn"
                onChange={() => {}}
              />
              <InputCreate
                title="Publisher"
                id="publisher"
                type="text"
                placeholder="Please enter the book's publisher..."
                name="publisher"
                onChange={() => {}}
              />
              <InputCreate
                title="Published on"
                id="published"
                type="text"
                placeholder="Please enter the book's publishing date..."
                name="published"
                onChange={() => {}}
              />
              <InputCreate
                title="Pages"
                id="pages"
                type="number"
                placeholder="Please enter the number of book's pages..."
                name="pages"
                onChange={() => {}}
              />
              <InputCreate
                title="Official Website"
                id="website"
                type="text"
                placeholder="Please enter the link to book's official website..."
                name="website"
                onChange={() => {}}
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePage;
