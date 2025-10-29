let user = {
  username: "sam",
  age: 25,
  email: "sam@gmail.com",
  occupation: "Engineer",
  available: true
};

let user2 = {
  username: "john",
  age: 30,
  email: "john@gmail.com",
  occupation: "Designer",
  available: false
};

let user3 = {
  username: "alice",
  age: 28,
  email: "alice@gmail.com",
  occupation: "Manager",
  available: true
};



let users = [user, user2, user3];

users[0].city = "New York";
users[1].city = "Los Angeles";
users[2].city = "Chicago";    

// Filter available users
let availableUsers = users.filter(user => user.available === true);

// ✅ Delete email property from all users
// users.forEach(user => {
//   delete user.email;
// });



// Display available users including the `available` status
availableUsers.forEach(user => {
  console.log(
    `Hello ${user.username},
Age: ${user.age},
Email: ${user.email},
City: ${user.city},
Occupation: ${user.occupation},
Available: ${user.available}`
  );
  console.log('-----------------');
});

console