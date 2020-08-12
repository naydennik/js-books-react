import config from "../config/config";
import API from "../config/api";

const getAuthtoken = () => sessionStorage.getItem("authtoken");
const url = `/appdata/${config.kinveyAppKey}/books`;
const token = sessionStorage.getItem("authtoken");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Kinvey ${token}`,
};

const booksServices = {
  // getAllBooks() {
  //   return API.get(url, { headers })
  //     .then(({ data }) => {
  //       return data;
  //     })
  //     .catch(() => {
  //       //console.warn(error);
  //     });
  // },

  getBookDetails(id) {
    return API.get(`${url}/${id}`, { headers })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  editBook(id, params) {
    return API.put(`${url}/${id}`, params, { headers })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          window.alert("Successfully edited!");
        }
      })
      .catch((error) => {
        window.alert("Something went wrong! Please try again.");
        console.warn(error);
      });
  },

  createBook(data) {
    return API.post(url, data, { headers })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          window.alert("Successfully created!");
        }
      })
      .catch((error) => {
        window.alert("Something went wrong! Please try again.");
        console.warn(error);
      });
  },

  deleteBook(id) {
    return API.delete(`${url}/${id}`)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          window.alert("Successfully deleted!");
          // this.$router.push({ name: "allBooks" });
        }
      })
      .catch((error) => {
        window.alert("Something went wrong! Please try again.");
        console.warn(error);
      });
  },

  created() {
    this.$http.defaults.headers["Authorization"] = `Kinvey ${getAuthtoken()}`;
  },
};

export default booksServices;
