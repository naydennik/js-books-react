import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.css";
import service from "../../services/booksService";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import InputCreate from "../../components/input-create";
import Textarea from "../../components/textarea";
import AlertMessage from "../../components/alert";
import {
  titlePattern,
  authorPattern,
  descriptionPattern,
  isbnPattern,
  publisherPattern,
  publishedPattern,
  pagesPattern,
} from "../../services/patterns";

class CreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      author: "",
      imageUrl: "",
      description: "",
      isbn: "",
      publisher: "",
      published: "",
      pages: "",
      website: "",
      errors: {
        title: "",
        subtitle: "",
        author: "",
        description: "",
        isbn: "",
        publisher: "",
        published: "",
        pages: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "title":
        errors.title = !titlePattern.test(value)
          ? "The title should start with capital letter and should be at least two symbols long!"
          : "";
        break;
      case "subtitle":
        errors.subtitle = !titlePattern.test(value)
          ? "The subtitle should start with capital letter and should be at least two symbols long!"
          : "";
        break;
      case "author":
        errors.author = !authorPattern.test(value)
          ? "The author's name should start with capital letter and should be at least 2 symbols long!"
          : "";
        break;
      case "description":
        errors.description = !descriptionPattern.test(value)
          ? "The description should be more than 10 symbols!"
          : "";
        break;
      case "isbn":
        errors.isbn = !isbnPattern.test(value)
          ? "ISBN should contain only digits and should be exactly 13 symbols long!"
          : "";
        break;
      case "publisher":
        errors.publisher = !publisherPattern.test(value)
          ? "The publisher's name should be at least 2 symbols long!"
          : "";
        break;
      case "published":
        errors.published = !publishedPattern.test(value)
          ? "Please enter correct date in the format 'yyyy-mm-dd'!"
          : "";
        break;
      case "pages":
        errors.pages = !pagesPattern.test(value)
          ? "The number of pages should be a digit!"
          : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.state.title;
    const subtitle = this.state.subtitle;
    const author = this.state.author;
    const imageUrl = this.state.imageUrl;
    const description = this.state.description;
    const isbn = this.state.isbn;
    const publisher = this.state.publisher;
    const published = this.state.published;
    const pages = this.state.pages;
    const website = this.state.website;

    service
      .createBook({
        title,
        subtitle,
        author,
        imageUrl,
        description,
        isbn,
        publisher,
        published,
        pages,
        website,
      })
      .then((res) => {
        this.props.history.push("/books");
      });
  }

  render() {
    const { errors } = this.state;
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
          <form onSubmit={this.handleSubmit}>
            <div className="row space-top">
              <div className="col-md-4">
                <InputCreate
                  title="Book Title"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter book's title..."
                  required={true}
                  value={this.state.title}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.title.length > 0 && (
                  <AlertMessage message={errors.title} />
                )}
                <InputCreate
                  title="Book Subtitle"
                  id="subtitle"
                  type="text"
                  required={true}
                  name="subtitle"
                  placeholder="Enter book's subtitle..."
                  value={this.state.subtitle}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.subtitle.length > 0 && (
                  <AlertMessage message={errors.subtitle} />
                )}
                <InputCreate
                  title="Author"
                  id="author"
                  type="text"
                  required={true}
                  name="author"
                  placeholder="Enter book's author..."
                  value={this.state.author}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.author.length > 0 && (
                  <AlertMessage message={errors.author} />
                )}
                <InputCreate
                  title="Image"
                  id="image"
                  type="text"
                  required={true}
                  name="imageUrl"
                  placeholder="Enter link to book's image..."
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                />
                <img
                  id="img"
                  src={this.state.imageUrl}
                  alt={this.state.title}
                />
                <Textarea
                  title="Description"
                  id="description"
                  type="text"
                  required={true}
                  name="description"
                  placeholder="Enter book's description..."
                  value={this.state.description}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.description.length > 0 && (
                  <AlertMessage message={errors.description} />
                )}
                <InputCreate
                  title="ISBN"
                  id="isbn"
                  type="number"
                  required={true}
                  name="isbn"
                  placeholder="Enter book's ISBN..."
                  value={this.state.isbn}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.isbn.length > 0 && (
                  <AlertMessage message={errors.isbn} />
                )}
                <InputCreate
                  title="Publisher"
                  id="publisher"
                  type="text"
                  required={true}
                  name="publisher"
                  placeholder="Enter book's publisher..."
                  value={this.state.publisher}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.publisher.length > 0 && (
                  <AlertMessage message={errors.publisher} />
                )}
                <InputCreate
                  title="Published on"
                  id="published"
                  type="text"
                  required={true}
                  name="published"
                  placeholder="Enter book's publishing date in format yyyy-mm-dd..."
                  value={this.state.published}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.published.length > 0 && (
                  <AlertMessage message={errors.published} />
                )}
                <InputCreate
                  title="Pages"
                  id="pages"
                  type="number"
                  required={true}
                  name="pages"
                  placeholder="Enter number of book's pages..."
                  value={this.state.pages}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {errors.pages.length > 0 && (
                  <AlertMessage message={errors.pages} />
                )}
                <InputCreate
                  title="Official Website"
                  id="website"
                  type="text"
                  required={true}
                  name="website"
                  placeholder="Enter link to book's official website..."
                  value={this.state.website}
                  onChange={this.handleChange}
                />
                <Button type="submit" name="Create Book" />
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CreatePage);
