// Objekte

const users = [
  {
    username: "Kai", // Key:Value Pair
    age: 29,
    email: "test@web.de", // Eigenschaft
    oberteil: "Jacke",
    schreien: function () {
      return "Ich schreie! Falls dus nicht hörst";
    },
  },
  {
    username: "Thomas", // Key:Value Pair
    age: 29,
    email: "test@web.de", // Eigenschaft
    oberteil: "Jacke",
    schreien: function () {
      return "Ich schreie! Falls dus nicht hörst";
    },
  },
  {
    username: "Stephan", // Key:Value Pair
    age: 29,
    email: "test@web.de", // Eigenschaft
    oberteil: "Jacke",
    schreien: function () {
      return "Ich schreie! Falls dus nicht hörst";
    },
  },
];

function greetsUser(username) {
  return `Hello ${username}`
}

users.forEach((userobj)=>{
  const greet = greetsUser(userobj.username)
  console.log(greet);

  return "test"
})
