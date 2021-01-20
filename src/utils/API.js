import axios from "axios";

// get users function
export const getUsers = () => {
    axios
        .get("https://randomuser.me/api/?results=200&nat=us")
        .then((response) => {
            console.log(response.data);
            // handle success
            return response;
        })
        .catch((err) => {
            // handle error
            console.log(err);
        })
        .then(() => {
            // always executed
        });
};