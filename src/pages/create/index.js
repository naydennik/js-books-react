import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.css";
import service from "../../services/booksService";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import InputCreate from "../../components/input-create";

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(res);
        this.props.history.push("/books");
      });
  }

  render() {
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
                  required={true}
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Book Subtitle"
                  id="subtitle"
                  type="text"
                  required={true}
                  name="subtitle"
                  value={this.state.subtitle}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Author"
                  id="author"
                  type="text"
                  required={true}
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Image"
                  id="image"
                  type="text"
                  required={true}
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Description"
                  id="description"
                  type="text"
                  required={true}
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="ISBN"
                  id="isbn"
                  type="number"
                  required={true}
                  name="isbn"
                  value={this.state.isbn}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Publisher"
                  id="publisher"
                  type="text"
                  required={true}
                  name="publisher"
                  value={this.state.publisher}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Published on"
                  id="published"
                  type="text"
                  required={true}
                  name="published"
                  value={this.state.published}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Pages"
                  id="pages"
                  type="number"
                  required={true}
                  name="pages"
                  value={this.state.pages}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Official Website"
                  id="website"
                  type="text"
                  required={true}
                  name="website"
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
