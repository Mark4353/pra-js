// Напишіть функцію makeGreetings(), 
// яка при виклику буде приймати змінну name (наприклад, «Василь») 
// і виводити рядок (в нашому випадку «Привіт, Василь»).



// є два способи створити функцію
// 1-оголошення функції(function decloration)

// console.log(makeGreetings('Андрій'))//<----- Так працює
// // створили функцію
// function makeGreetings(userName){
// // const greetings = `Привіт ${userName}`;
// // return greetings;

// return `Привіт ${userName}`;

// }
// // викликали функцію
// // makeGreetings("Василь");
// const message = makeGreetings("Василь"); // <--- зберігання функції
// console.log(message);


// const secondMessage = makeGreetings('Іван');
// console.log(secondMessage);



// 2-функціональний вираз (funtion expression)

// // makeGreetings('Іван');// <---- Так не можна робити буде помилка
// // створили функцію
// const makeGreetings = function(userName){
// const greetings = `Привіт ${userName}`
// return `Привіт ${userName}`;
// }
// // викликали функцію
// // makeGreetings('Василь');
// const message = makeGreetings("Василь");
// console.log(message);
// // у функціональному виразі треба спочатку створити функцію а потім викликати
// const secondMessage = makeGreetings('Іван');//<---- так можна робити
// console.log(secondMessage);




// Напишіть функцію mul(n, m), яка приймає два аргументи і 
// повертає добуток,
//  суму і різницю цих аргументів. Перевірте її роботу.

// const mul = function(n, m){
//     const sunNul = n + m 
//     const addNul = n * m
//     const differNul = n - m
//     return `при додаванні ${sunNul},при множенні ${addNul}, при відніманні ${differNul}`
// }

// const resultMul = mul(6, 5);
// console.log(resultMul);

// Розглянемо як працювати з різною кількістю елементів
// const anotherMul = function(a, b ,c){
//     return a + b + c;
// } 
// const resoultAnotherMul  = anotherMul(86, 66);
// console.log(resoultAnotherMul);

// const resoult = anotherMul(94, 768 , 3);
// console.log(resoult)




// const anotherMul = function(arryNum){
//     let saveNum = 0;
//     for(let i = 0; arryNum.length  0; i++){
//       saveNum += arryNum[i]
//     }
//     return saveNum
// } 
// const resoultAnotherMul  = anotherMul([86, 66]);
// console.log(resoultAnotherMul);

// const resoult = anotherMul([94, 768 , 3]);
// console.log(resoult)


// Напиши функцію myAverageScore , яка у якості аргументу 
// отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAvera
// Для перевірки:

// const myAverageScore = function(marks){
//     let sum = 0;
//     for(const mark of marks){
//         sum += mark
//     }
// const AverageMark = sum / marks.length;
// let averageScore = '';

// if(AverageMark >= 91 || AverageMark <= 100){
// averageScore='A'
// }else if(AverageMark >= 81 || AverageMark <= 90){
//     averageScore='B'

// }else if(AverageMark >= 71 || AverageMark <= 80){
//     averageScore= 'C'

// }else{
//     averageScore ='D'
// }
// const message = ` Оцінка ${averageScore}`

// }
// console.log(message);

// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));




// const sumNumbers = function (...numbers) {


// console.log(numbers)
// let sum = 0;
// for(const number of numbers){
//     sum += number;
// }
// return sum;
// };
// console.log(sumNumbers(4, 6));
// console.log(sumNumbers(4, 6, 5, 9, 46));

// sumNumbers(4, 6, 5);

// const creatMessage = function(sumNumbers) {
//     let sumOfNumbers = sumNumbers(1, 2, 88, 5)
//     const message = `Result of numbers ${sumOfNumbers}`;
//     return message;//<--- Вертаемо message
//  }
// console.log(creatMessage(sumNumbers));


//  const test = function() {
// const sentence = 'HelloWorld'
// return sentence;
//  }
//  test();


// callbacks
//Оголошення функції function decloration

// function makeInfo(countLength, stringM) {
//     const lengthMes = countLength(stringM);
//     const mess = `qweqewqeq ${lengthMes}`
//     return mess;
// }
// // const result = makeInfo(5);
// // console.log(result)
// const result = makeInfo(countLength , "test message");
// console.log(result);


// function countLength (stringM) {
// const mess = stringM;
// const messLength =mess.length
// return messLength;

// }
// // console.log(countLength("test message"))

// стрілаова функція

// const a = () => {
// }

// const makeInfo makeInfo(countLength, stringM) => {
//     const lengthMes = countLength(stringM); 
//     return `qweqewqeq ${lengthMes}`;
// }




// 1. оголошення функції function declaration 

// const result = makeInfo(countLength, 'test');
// console.log(result);

// function makeInfo (countLength, stringM) {

//    const lengthMes = countLength(stringM);
//     const mess = The length of string is ${lengthMes};
//     return mess
// } це є функція вищого порядку

// function countLength (stringM) {
//     const mess = stringM;
//     const messLength = mess.length;
//     return messLength
// }    це є колбек









// 2. Функціональний вираз function expression

// const countLength = function (stringM) {
//     const mess = stringM;
//     const messLength = mess.length;
//     return messLength // 7
// }

// const makeInfo = function (countLength, stringM, number) {

//     const lengthMes = countLength(stringM);
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }
 
//  const result = makeInfo(countLength, 'test message kehbvkevb', 15);
//  console.log(result);

//  const resul2 = makeInfo(countLength, 'My name is Tetiana', 100);
//  console.log(resul2);


//  const resul3 = makeInfo(countLength, 'I love to travel', 1000);
//  console.log(resul3);



// було
// const makeInfo = function ( stringM, number) {

//     const lengthMes = stringM.length;
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }

// стало (стрілкова функція)

// const makeInfo =  ( stringM, number) => {

//     const lengthMes = stringM.length;
//      const mess = The length of string is ${lengthMes}. Test number is ${number};
//      return mess
//  }

// скоротимо

// const makeInfo =  ( stringM, number) => {
//      return The length of string is ${stringM.length}. Test number is ${number}
//  }

//  const resul3 = makeInfo( 'I love to travel', 1000);
//  console.log(resul3);


//  скоротимо ще через неявне повернення (якщо у {} стоїть одразу return, то ми їх можемо скоротити та після стрілки одразу прописати результат, який повертає функція)

// const makeInfo =  ( stringM, number) => The length of string is ${stringM.length}. Test number is ${number}

// const resul3 = makeInfo( 'I love to travel', 1000);
// console.log(resul3);



// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

const findUserLogin = function(arryLogins, trueLoginFind) {
    let message =`логін ${trueLoginFind} не знайдено`
  for(const oneEleLogin of arryLogins){
if(trueLoginFind === oneEleLogin){
   message =`логін ${trueLoginFind} знайдено`
    break
} 
  }
  return message

  }


console.log(findUserLogin(logins, loginToFind));

