import config from "../config/config";
import API from "../config/api";

const loginUser = (user) => {
  sessionStorage.setItem("username", user.username);
  sessionStorage.setItem("authtoken", user.authtoken);
  sessionStorage.setItem("id", user.id);

  return user;
};

const clearSessionStorage = () => sessionStorage.clear();

const auth = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${config.authString}`,
  },

  register(params) {
    //this.isLoading = true;

    return API.post(`/user/${config.kinveyAppKey}`, params, {
      headers: this.headers,
    });
    // .then(() => {
    //   console.log("Successfully registered");
    // })
    // .catch((err) => {
    //   if ((err.status = 409)) {
    //     window.alert(
    //       "This username is taken! Please try with different one."
    //     );
    //   } else {
    //     window.alert(
    //       "Something went wrong ): Please check if the username and password are correct!\nIf you still have a problem, contact us."
    //     );
    //   }
    //   console.warn(err);
    // });
  },

  login(params) {
    return API.post(`/user/${config.kinveyAppKey}/login`, params, {
      headers: this.headers,
    })
      .then((res) => {
        loginUser({
          username: res.data.username,
          authtoken: res.data._kmd.authtoken,
          id: res.data._id,
        });
        console.log("Successfully logged in");
      })
      .catch((err) => {
        window.alert(
          "Something went wrong ): Please check if the username and password are correct!\nIf you still have a problem, contact us."
        );
        console.warn(err);
        return;
      });
  },

  logout() {
    const token = sessionStorage.getItem("authtoken");

    return API.post(`/user/${config.kinveyAppKey}/_logout`, "", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Kinvey ${token}`,
      },
    })
      .then(() => {
        clearSessionStorage();
      })
      .catch((err) => {
        console.warn(err);
      });
  },
};

export default auth;
