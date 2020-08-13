import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserContext } from "./config/context";
import { useState } from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       logged: false,
//       user: null,
//     };
//   }

//   loggedIn = () => {
//     this.setState({
//       logged: true,
//       user: "Pesho",
//     });
//   };

//   loggedOut = () => {
//     this.setState({
//       logged: false,
//       user: null,
//     });
//   };

//   componentDidMount() {
//     const token = sessionStorage.getItem("authtoken");

//     if (!token) {
//       this.loggedOut();
//       return;
//     } else {
//       this.loggedIn();
//     }
//   }

//   render() {
//     const { logged, user } = this.state;
//     return (
//       <UserContext.Provider
//         value={{
//           logged,
//           user,
//           loggedIn: this.loggedIn,
//           loggedOut: this.loggedOut,
//         }}
//       >
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export default App;

const App = (props) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  const loggedIn = (user) => {
    setUser(user);
    setLogged(true);
  };

  const loggedOut = () => {
    setUser(null);
    setLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        loggedOut,
        user,
        logged,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
