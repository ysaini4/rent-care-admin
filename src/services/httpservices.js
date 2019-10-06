import axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "../utility/common";
//axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "https://rent-care-server.herokuapp.com/";
axios.defaults.headers.common["x-auth-token"] = getJwt();
export const httpService = async (method, url, data = "") => {
  try {
    const res = await axios({
      method,
      url,
      data
    });
    if (res.data.msg) {
      toast.success(res.data.msg);
    }
    return res.data;
  } catch (err) {
    if (err.response.data && err.response.data.msg) {
      toast.error(err.response.data.msg);
    }
    throw err.response.data;
  }
};
export const httpServiceLogin = async (method, url, data = "") => {
  try {
    const res = await axios({
      method,
      url,
      data
    });
    if (res.data.msg) {
      toast.success(res.data.msg);
    }
    if (res.headers["x-auth-token"]) {
      axios.defaults.headers.common["x-auth-token"] =
        res.headers["x-auth-token"];
      localStorage.setItem("rc-x-auth-token", res.headers["x-auth-token"]);
    }
    return res.data;
  } catch (err) {
    if (err.response.data && err.response.data.msg) {
      toast.error(err.response.data.msg);
    }
    throw err.response.data;
  }
};
