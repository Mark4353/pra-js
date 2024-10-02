
// ----1----

//  const response = confirm("Подивитися на повідомлення Hello World?");
//     if (response) {
       
//         alert("Hello World!");
//        };

// ----2----

// let randomNumber = Math.floor(Math.random() * 100) + 1;

//         const checkGuess = () => {
//             let userGuess;
//             do {
//                 userGuess = prompt("Вгадайте число від 1 до 100:");
//                 if (userGuess == null) {
//                     alert("Игра отменена.");
//                     break; 
//                 }
//                 userGuess = Number(userGuess);
//                 if (userGuess === randomNumber) {
//                     alert("Ви вгадали!");
//                 } else if (userGuess > randomNumber) {
//                     alert("Надто велике число");
//                 } else {
//                     alert("Надто маленьке число");
//                 }
//             } while (userGuess !== randomNumber);
//         };
//         window.onload = checkGuess;
//         // 86 
//         // Я спочатку непомітив що можна використовувати HTML, а задачу я вже виконав :( 

// ----3----

// let clickCount = 0;


// const countClicks = () => {
//     clickCount++;
//     console.log("Клік " + clickCount);
// };


// window.onload = () => {
//     document.addEventListener("click", countClicks);
// };

// ----4----

// const applyCallbackToEachElement = (arr, callback) => {
//     return arr.map(callback);
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);

//----5----

// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * (discount / 100));
//     callback(discountedPrice);
// };

// const showDisccontedPrice = (discountedPrice) => {
//     console.log(`Дисконтна ціна: ${discountedPrice}`);
// };

// calculateDiscountedPrice(100, 10, showDisccontedPrice);

//Навіщо писати такі довгі назви (alculateDiscountedPrice)?можно ж скоротити
