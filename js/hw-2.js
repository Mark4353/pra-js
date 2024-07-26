const ce = 10;
const fa = 50;
const Celsius = (fa - 32) / 2 ;//  тас ще треба зробити плюс 1/10 и тоді вийде 10 а так 9
 const fahrenheit = ce * (9 / 5) + 32;
  
 console.log(Celsius);

 console.log(fahrenheit);

 const dayMonth  =  31 ;
 const dayhours  =  24 ;
const hours = 1 ;
 const  minutes =  60;
 const monthHours  =  dayMonth * dayhours ;
 const  monthMinutes = monthHours * minutes;

 console.log(monthHours);

console.log(monthMinutes);
  
// Розкоминтуйте з 23 по 45 рядок щоб побачити завдання 3 та 4 
// але тільки в кінці перевірки дз!

// const startGame = alert("Почати гру");
// const game1 = alert("health = 100   |  energy = 100");
// let health = 100;
// let energy = 100;

// console.log(health);

// console.log(energy);

// const game2 =confirm("піти направо по дорозі?");
// const game3 = alert("ви зустріли змія-Горинича!");
// const gameLol = alert("health = 50   |  energy = 65");

// health = 50;
// energy = 65;

// console.log(health);

// console.log(energy);


// const shopSale = prompt("Введіть знижку яку бажаете отримати!");
// const shopChek = 1500 / shopSale;


let floatNumber = 42.67;
let roundedNumber = Math.floor(floatNumber);

console.log( roundedNumber);

let floatString = "123.45";
let parsedFloat = parseFloat(floatString);

console.log( parsedFloat);


let integerString = "456";
let parsedInteger = parseInt(integerString);

console.log( parsedInteger);
  

let number = 64;
let squareRoot = Math.sqrt(number);

console.log(squareRoot);


let intValue = 42;
let stringNumber = "123";
let parsedNumber = parseInt(stringNumber);
console.log( parsedNumber); 

let stringValue = intValue.toString();

console.log( stringValue); 
