import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsersByLanguage: function(language) {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            //Get axios request and parse data we want
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },

};
