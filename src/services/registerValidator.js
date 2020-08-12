import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { passwordPattern } from "./patterns";

function registerValidator(username, password, confirmPassword) {
  if (username.length < 5 || username === "") {
    toast.error("Username must be at least 5 characters long", {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  if (!password.match(passwordPattern) || password === "") {
    toast.error(
      "Password must be at least 5 characters long and should contain only letters and digits!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Password and Re-password should match", {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  return true;
}

export default registerValidator;
