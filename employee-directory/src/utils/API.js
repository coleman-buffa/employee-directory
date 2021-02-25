import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  getRoster: function() {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          //Format date to exlude extra information
          const DOB = user.dob.date.split('T');
          return {
            image: user.picture.thumbnail,
            empname: `${user.name.first} ${user.name.last}`,
            phone: user.phone,
            email: user.email,
            dob: DOB[0]            
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  },

};
