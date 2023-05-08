import axios from "axios";

axios

export const axiosUtil = async (options) => {
    return await axios.request(options).then((res) => res.data);
};