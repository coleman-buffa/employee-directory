import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  getRoster: function() {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            image: user.picture.thumbnail,
            name: `${user.name.first} ${user.name.last}`,
            phone: user.phone,
            email: user.email,
            dob: user.dob.date            
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },

};
