import axios from "axios";

const get = async (url) => {
    let response;
    try {
        response = await axios.get(url);
    } catch (err) {
        console.log("Request Error: ", err);
    }
    return response;
};

export default {
    get,
};
