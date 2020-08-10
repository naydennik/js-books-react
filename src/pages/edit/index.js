// import React, { useState, useEffect } from "react";
// import Header from "../../components/header";
// import Footer from "../../components/footer";
// import InputCreate from "../../components/input-create";
// import styles from "./index.module.css";
// import Button from "../../components/button";
// import { useHistory } from "react-router-dom";
// import service from "../../services/booksService";

// const EditPage = () => {
//   const [params, setParams] = useState({
//     title: "",
//     subtitle: "",
//     author: "",
//     imageUrl: "",
//     description: "",
//     isbn: "",
//     publisher: "",
//     published: "",
//     pages: "",
//     website: "",
//   });
//   const bookId = window.location.pathname.split("/")[2];
//   const history = useHistory();

//   const handleChange = (event) => {
//     setParams({
//       [event.target.name]: event.target.value,
//     });
//   };

//   useEffect(() => {
//     const book = service.getBookDetails(bookId);

//     setParams({
//       title: book.title,
//       subtitle: book.subtitle,
//       author: book.author,
//       imageUrl: book.imageUrl,
//       description: book.description,
//       isbn: book.isbn,
//       publisher: book.publisher,
//       published: book.published,
//       pages: book.pages,
//       website: book.website,
//     });
//   }, [bookId]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const title = params.title;
//     const subtitle = params.subtitle;
//     const author = params.author;
//     const imageUrl = params.imageUrl;
//     const description = params.description;
//     const isbn = params.isbn;
//     const publisher = params.publisher;
//     const published = params.published;
//     const pages = params.pages;
//     const website = params.website;

//     service
//       .editBook(bookId, {
//         title,
//         subtitle,
//         author,
//         imageUrl,
//         description,
//         isbn,
//         publisher,
//         published,
//         pages,
//         website,
//       })
//       .then((res) => {
//         console.log(res);
//         history.push("/books");
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <div className="container" id={styles.container}>
//         <div className="row space-top">
//           <div className="col-md-12">
//             <h1>Edit Book</h1>
//             <br />
//           </div>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="row space-top">
//             <div className="col-md-4">
//               <InputCreate
//                 title="Book Title"
//                 id="title"
//                 type="text"
//                 name="title"
//                 value={params.title}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Book Subtitle"
//                 id="subtitle"
//                 type="text"
//                 name="subtitle"
//                 value={params.subtitle}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Author"
//                 id="author"
//                 type="text"
//                 name="author"
//                 value={params.author}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Image"
//                 id="image"
//                 type="text"
//                 name="imageUrl"
//                 value={params.imageUrl}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Description"
//                 id="description"
//                 type="text"
//                 name="description"
//                 value={params.description}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="ISBN"
//                 id="isbn"
//                 type="number"
//                 name="isbn"
//                 value={params.isbn}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Publisher"
//                 id="publisher"
//                 type="text"
//                 name="publisher"
//                 value={params.publisher}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Published on"
//                 id="published"
//                 type="text"
//                 name="published"
//                 value={params.published}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Pages"
//                 id="pages"
//                 type="number"
//                 name="pages"
//                 value={params.pages}
//                 onChange={handleChange}
//               />
//               <InputCreate
//                 title="Official Website"
//                 id="website"
//                 type="text"
//                 name="website"
//                 value={params.website}
//                 onChange={handleChange}
//               />
//               <Button type="submit" name="Edit Book" />
//             </div>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EditPage;

import React, { Component } from "react";
import styles from "./index.module.css";
import service from "../../services/booksService";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import InputCreate from "../../components/input-create";

class EditPage extends Component {
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
    const book = await service.getBookDetails(this.id);
    console.log(book);

    let isLoading = false;

    // if (!isLoading) {
    //   //this.props.history.push("/");
    //   return null;
    // }

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

export default EditPage;
