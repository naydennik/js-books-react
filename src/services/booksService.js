import config from "@/config/config";

const getAuthtoken = () => sessionStorage.getItem("authtoken");

export const booksServices = {
  data() {
    return {
      books: [],
      book: [],
      isLoading: false,
    };
  },
  methods: {
    getAllBooks() {
      this.isLoading = true;
      return this.$http
        .get(`appdata/${config.kinveyAppKey}/books`)
        .then(({ data }) => {
          this.books = data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.warn(error);
        });
    },

    getBookDetails(id) {
      return this.$http
        .get(`appdata/${config.kinveyAppKey}/books/${id}`)
        .then(({ data }) => (this.book = data))
        .catch((error) => {
          console.warn(error);
        });
    },

    editBook(id, data) {
      return this.$http
        .put(`appdata/${config.kinveyAppKey}/books/${id}`, data)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            window.alert("Successfully edited!");
            this.$router.push({ name: "allBooks" });
          }
        })
        .catch((error) => {
          window.alert("Something went wrong! Please try again.");
          console.warn(error);
        });
    },

    createBook(data) {
      return this.$http
        .post(`appdata/${config.kinveyAppKey}/books`, data)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            window.alert("Successfully created!");
            this.$router.push({ name: "allBooks" });
          }
        })
        .catch((error) => {
          window.alert("Something went wrong! Please try again.");
          console.warn(error);
        });
    },

    deleteBook(id) {
      return this.$http
        .delete(`appdata/${config.kinveyAppKey}/books/${id}`)
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            window.alert("Successfully deleted!");
            this.$router.push({ name: "allBooks" });
          }
        })
        .catch((error) => {
          window.alert("Something went wrong! Please try again.");
          console.warn(error);
        });
    },
  },
  created() {
    this.$http.defaults.headers["Authorization"] = `Kinvey ${getAuthtoken()}`;
  },
};
