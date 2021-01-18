import axios from "axios";

// get users function
export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};