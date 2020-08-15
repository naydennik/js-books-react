import config from "../config/config";
import API from "../config/api";

const url = `/appdata/${config.kinveyAppKey}/books`;
const token = sessionStorage.getItem("authtoken");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Kinvey ${token}`,
};

const booksServices = {
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
    return API.delete(`${url}/${id}`, { headers })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          window.alert("Successfully deleted!");
        }
      })
      .catch((error) => {
        window.alert("Something went wrong! Please try again.");
        console.warn(error);
      });
  },
};

export default booksServices;
