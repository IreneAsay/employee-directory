import axios from "axios";

// get users function
export const getUsers = () => {
    return axios.get("https://randomuser.me/api/?results=50&nat=us")
};
