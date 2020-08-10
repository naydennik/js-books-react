import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.css";
import service from "../../services/booksService";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import InputCreate from "../../components/input-create";
import API from "../../config/api";
import config from "../../config/config";

class EditPage extends Component {
  _isMounted = false;
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
    this.id = window.location.pathname.split("/")[2];
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
      .editBook(this.id, {
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

  async componentDidMount() {
    this._isMounted = true;
    const url = `/appdata/${config.kinveyAppKey}/books`;
    const token = sessionStorage.getItem("authtoken");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Kinvey ${token}`,
    };
    let book;

    await API.get(`${url}/${this.id}`, { headers }).then(({ data }) => {
      if (this._isMounted) {
        book = data;
        this.setState({
          title: book.title,
          subtitle: book.subtitle,
          author: book.author,
          imageUrl: book.imageUrl,
          description: book.description,
          isbn: book.isbn,
          publisher: book.publisher,
          published: book.published,
          pages: book.pages,
          website: book.website,
        });
      }
    });
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" id={styles.container}>
          <div className="row space-top">
            <div className="col-md-12">
              <h1>Edit Book</h1>
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
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Book Subtitle"
                  id="subtitle"
                  type="text"
                  name="subtitle"
                  value={this.state.subtitle}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Author"
                  id="author"
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Image"
                  id="image"
                  type="text"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Description"
                  id="description"
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="ISBN"
                  id="isbn"
                  type="number"
                  name="isbn"
                  value={this.state.isbn}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Publisher"
                  id="publisher"
                  type="text"
                  name="publisher"
                  value={this.state.publisher}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Published on"
                  id="published"
                  type="text"
                  name="published"
                  value={this.state.published}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Pages"
                  id="pages"
                  type="number"
                  name="pages"
                  value={this.state.pages}
                  onChange={this.handleChange}
                />
                <InputCreate
                  title="Official Website"
                  id="website"
                  type="text"
                  name="website"
                  value={this.state.website}
                  onChange={this.handleChange}
                />
                <Button type="submit" name="Edit Book" />
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(EditPage);
