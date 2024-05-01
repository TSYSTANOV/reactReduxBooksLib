import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearError } from "../redux/ErrorSlice/errorSlice";
function Error() {
  const errorMessage = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage) {
      toast.warn(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage]);
  return <ToastContainer position="top-right" autoClose={2000} />;
}
export { Error };
