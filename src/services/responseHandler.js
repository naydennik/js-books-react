import { toast } from "react-toastify";

const responseHandler = (res, message) => {
  if (res.status >= 200 && res.status < 300) {
    toast.success(`Successfully ${message}!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  if (res.status >= 400 && res.status < 500) {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  if (res.status >= 500) {
    toast.error("No connection with server. Please try again later!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export default responseHandler;
