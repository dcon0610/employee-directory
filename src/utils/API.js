import axios from "axios";

const URL = "https://randomuser.me/api/?results=150&nat=au"

export default {
  getEmployees: function() {
    console.log("employees returned", axios.get(URL))
    return axios.get(URL);
  }
};
