console.dir(Number);

let testNumber = "10";
console.log(testNumber);
// testNumber = 10;
// console.log(testNumber);
testNumber = Number(testNumber);
console.log(testNumber);

console.log(Number("test"));

console.log(Number(true));

console.log(Number(null));

console.log(Number(undefined));

const widthElement = "50.5px";
console.log(widthElement)
const widthEle = Number.parseFloat(widthElement) ;
console.log(widthEle);
const heightElement = "78.9px";
console.log(Number.parseInt(heightElement));


const testNun = "qweqwe";
const testNunFloat = Number.parseFloat(testNun);
console.log(testNunFloat);
console.log(Number.isNaN(testNunFloat));

console.log(0.1 + 0.2);
console.log((0.1 *10 + 0.2 *10)/10);
 
console.log(0.6 + 0.3);
console.log((0.6 *100 + 0.3 *100)/100);

console.log(Math);
// максемальне число
console.log(Math.max(3,89890,5,8,99));
// Мінімальне число
console.log(Math.min(3,89890,5,8,2,99));
// pow Відносе до степені
console.log(Math.pow(9, 9));
// ceil заокруглюе у Більшу сторону
console.log(Math.ceil(8.65));
// floor заокруглюе у меншу сторону
console.log(Math.floor(8.65));
// по матиматичним правелам
console.log(Math.round(8.65));


const max = 10;
const min = 1;
console.log(Math.random()*(max - min ) + min);
const randomNumber = Math.random()*(max - min ) + min;
console.log(randomNumber);
console.log(Math.round(randomNumber));


