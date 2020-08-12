import config from "../config/config";
import API from "../config/api";

export const loginUser = (user) => {
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
    return API.post(`/user/${config.kinveyAppKey}`, params, {
      headers: this.headers,
    });
  },

  login(params) {
    return API.post(`/user/${config.kinveyAppKey}/login`, params, {
      headers: this.headers,
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
