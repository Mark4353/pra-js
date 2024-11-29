console.log("Hw-14");
console.log("--1-");

const users = [
  { name: "Mark" },
  { name: "Ivan" },
  { name: "Artem" },
  { name: "Frank" },
];

const names = users.map((user) => user.name);
console.log(names);

console.log("--2--");

const eyeColorUsers = [
  { name: "Mark", eyeColor: "brown" },
  { name: "Ivan", eyeColor: "blue" },
  { name: "Artem", eyeColor: "green" },
  { name: "Frank", eyeColor: "blue" },
];
const eyeColorMessag = eyeColorUsers.map((color) => color.eyeColor);
console.log(eyeColorMessag);

console.log("--3--");

const userGenders = [
  { name: "Mark", gander: "male" },
  { name: "Ivan", gander: "male" },
  { name: "Artem", gander: "male" },
  { name: "Vannesa", gander: "female" },
];
const ganders = userGenders.map((userG) => userG.gander);
console.log(ganders);

console.log("--4--");

const userActive = [
  { name: "Mark", isActive: "Mark: userActive" },
  { name: "Ivan", isActive: "Ivan: Active" },
  { name: "Artem", noActive: "Artem: userAnActive" },
  { name: "Vannesa", isActive: "Vannesa: userActive" },
];

const actives = userActive.map((userA) => userA.isActive);
console.log(actives);

console.log("--5--");

console.log("--6--");

const users2 = [
  { id: 1, name: "User1", age: 25 },
  { id: 2, name: "User2", age: 30 },
  { id: 3, name: "User3", age: 20 },
  { id: 4, name: "User4", age: 28 },
  { id: 5, name: "User5", age: 35 },
];

function getUsersByAgeRange(users, minAge, maxAge) {
  const filteredUsers = [];
  for (let user of users2) {
    if (user.age >= minAge && user.age <= maxAge) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;

}

const minAge = 24;
const maxAge = 32;

const filteredUsers = getUsersByAgeRange(users, minAge, maxAge);
console.log(filteredUsers);
