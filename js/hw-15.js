console.log("");
console.log("Hw-15");
console.log("--1--");

const balance = [10000, 9000, 15000, 6000];

const summ = balance.reduce((acc, value) => acc + value, 0);
console.log(summ);

console.log("--2--");

const userFriend = [
  { name: "Mark", friend: "friendName" },
  { name: "Ivan", friend: "friendName" },
  { name: "Frank" },
  { name: "Artem", friend: "friendName" },
];

const userFriendMessag = userFriend.map((userF) => userF.friend);
console.log(userFriendMessag);

console.log("--3--");

const userFriends = [
  { name: "Mark", friends: 6 },
  { name: "Ivan", friends: 4 },
  { name: "Frank", friends: 2 },
  { name: "Artem", friends: 9 },
];

const sortNames = userFriends
  .sort((a, b) => b.friends - a.friends)
  .map((user) => user.name);

console.log(sortNames);

console.log("--4--");

const userSkils = [
  { name: "Mark", skils: "rwer" },
  { name: "Ivan", skils: "grteg" },
  { name: "Artem", skils: "aytrdg" },
  { name: "Frank", skils: "bserty" },
];

const sortedSkills = userSkils.map((user) => user.skils).sort();
console.log(sortedSkills);
