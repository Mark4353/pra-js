const flauver = {
    plant: true,
    owner: "Sviatik",

}
console.log(flauver);
//! rose - це екземпляр flauver
const rose = Object.create(flauver);
console.log(rose);

rose.color = "red";

console.log(rose);

const romashka = Object.create(flauver);

romashka.color = "white";

console.log(romashka);
const yellowRose = Object.create(flauver);
yellowRose.color = "yellow";
console.log(yellowRose);
const yellowRose1 = Object.create(yellowRose);
yellowRose1.color = "black";
yellowRose1.name = "yelli";
//! yellowRose - це екземпляр flauver
//! yellowRose1 - це екземпляр flauver
console.log(yellowRose1);

console.log(Array())

