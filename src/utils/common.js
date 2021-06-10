import { toast } from "react-toastify";

export const showToast = (title) => {
  toast.dark(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
