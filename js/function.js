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
