import axios from "axios";
import { showAlert } from "./alearts";

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === "password"
        ? "http://127.0.0.1:5000/api/v1/users/updateMyPassword"
        : "http://127.0.0.1:5000/api/v1/users/updateMe";
    const res = await axios({
      method: "PATCH",
      url,
      data,
    });
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
