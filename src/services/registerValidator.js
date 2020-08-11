import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function registerValidator(username, password, confirmPassword) {
  const passwordPattern = /^[a-zA-Z1-9]{5,}$/gm;
  if (username.length < 5 || username === "") {
    toast.error("Username must be at least 5 characters long", {
      position: toast.POSITION.TOP_CENTER,
    });
    return;
  }
  if (!password.match(passwordPattern) || password === "") {
    toast.error(
      "Password must be at least 5 characters long and should contain only letters and digits!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Password and Re-password should match", {
      position: toast.POSITION.TOP_CENTER,
    });
    return;
  }

  return toast.success("Successfully registered!", {
    position: toast.POSITION.TOP_CENTER,
  });
}

export default registerValidator;
