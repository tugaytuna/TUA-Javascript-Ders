let users = [
  {
    name: "Tugay",
    surname: "Tuna",
    age: 30,
    isAdmin: false,
    city: "İstanbul",
    favorites: ["html", "css", "javascript"],
  },
  {
    name: "Tolga",
    surname: "Yılmaz",
    age: 20,
    isAdmin: true,
    city: "İzmir",
    favorites: ["c#", "python"],
  },
  {
    name: "Ercan",
    surname: "Öz",
    age: 18,
    isAdmin: true,
    city: "Ankara",
    favorites: ["react", "photoshop"],
  },
];

// let person1 = {
//   name: "Tugay",
//   surname: "Tuna",
//   age: 30,
//   isAdmin: true,
//   city: "İstanbul",
//   favorites: ["html", "css", "javascript"],
// };

// let person2 = {
//   name: "Tolga",
//   surname: "Yılmaz",
//   age: 20,
//   isAdmin: false,
//   city: "İzmir",
//   favorites: ["c#", "python"],
// };

// console.log(person1);
// console.log(person2);

// let people = [person1, person2];

// console.log(people[1].name);

console.log(users);

// console.log(users[0].city);
// console.log(users[1].city);
// console.log(users[2].city);

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

function showAdmins() {
  console.log("Admin'ler listeleniyor...");
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      console.log(users[i].name);
    }
  }
}

showAdmins();
