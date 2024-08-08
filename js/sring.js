// const message = "JavaScript is my favorite subject!!";
// console.log(message);

// message[0]
// const firstLetter = message[0];
// console.log(firstLetter);

// console.log(message[3]);
// const messLength = message.length ;
// console.log(messLength);
// const lastLetter = message[messLength - 1] ;
// console.log(lastLetter);

// const message1 = "java script";
// const message2 = "Is my favorite subject!";
// console.log(message1);
// console.log(message2);
// // це називаеться сшивання або конкатенація рядків
// const fullmessage = message1 +" "+ message2;
// console.log(fullmessage);
// const friendName = null;
// let location;
// console.log(fullmessage + 5 + friendName);

// const result= 5 + 5 + "5";
// console.log(result);

// console.log("5" + 5 + 5);

// // Шаблоні рядки
// const myAge = 99;
// const info = `мені ${myAge} років`;
// console.log(info);
// // ${} називаеться интерполяція

// const Name = "Mark";
// const room = "VIP";
// const number = "123"
// const info = `Гість ${Name} поселяється в ${room} номер ${number}`;
// console.log(info);

// const myName = "Марков + Марк";
// console.log(myName);
// const myNameLength = myName.length;
// console.log(`My name is ${myName}`)





console.dir(String);
const operc = "Welcome";
console.log(operc.toUpperCase());
console.log("HelloWorl".toUpperCase());
console.log("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!".toLowerCase());

const testMessage = "Test";
console.log(testMessage.indexOf('t'));
const testsMessage = "Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!" ;
console.log(testsMessage.indexOf("принц"));

console.log("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!".includes("спам"));

console.log(testsMessage.startsWith("Привіт"));
console.log(testsMessage.endsWith("!"));

console.log("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!".trim());

console.log("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!".padStart(300 ,"лалалала "));

console.log("це тестовій рядок".padEnd(40 , "!"));

console.log("Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!".slice(10));

console.log("Mark".charAt());

const js = "JavaScript";
console.log(js.substring(0 , 4));