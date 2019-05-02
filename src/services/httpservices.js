import axios from "axios";
import { toast } from "react-toastify";
export const httpService = async (method, url, data = "", headers = "") => {
  try {
    const res = await axios({
      method,
      url,
      data,
      headers
    });
    if (res.data.msg) {
      toast.success(res.data.msg);
    }
    return res.data;
  } catch (err) {
    if (err.response.data.msg) {
      toast.error(err.response.data.msg);
    }
    throw err.response.data;
  }
};
