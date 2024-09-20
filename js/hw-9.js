//  ----1----
 // Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);

    }
  }
  
  logItems(['Mango', 'Poly', 'Ajax']);
  
// //   ----2----
// // Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) 
// // приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const priseWords = message.split(' ');

//     return priseWords.length * pricePerWord;
//   }
//   console.log(calculateEngravingPrice('Гравіювання прикрас Дешево', 10));
  
// // ----3----
// // Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// // (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//     const words = string.split(' ');
//     let longestWord = words[0];
  
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }

//     }
//     return longestWord;

//   }
  
//   console.log(findLongestWord('я не знаю що тут написати')); 
  
// //   ----4----
// // Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// // Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// // Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string) {
//     if (string.length <= 40) {
//       return string;
//     } else {
      
//         return string.slice(0, 40) + '...';
//     }

//   }
  
//   console.log(formatString('Цей рядок містить менше сорока символів'));
//   console.log(formatString('Цей рядок має більше сорока символів і його необхідно скоротити')); 

// //   ----5----
// // Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale.
// //  Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// function checkForSpam(message) {
//     const lowerCaseMessage = message.toLowerCase();
//     return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');


//   }
  
// //   console.log(checkForSpam('SALE offers now!')); // true
// //   console.log(checkForSpam('regular message.')); // false
// //   console.log(checkForSpam('SPAM emails!')); // true
  



// // ----6----
// // Напиши скрипт з наступним функціоналом:
// // При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// // Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// // Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
// //  Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// // 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом '
// // Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


// let numbers = [];
// let total = 0;


// while (true) {
//   let input = prompt('Введіть число (або натисніть Cancel для завершення):');

//   if (input === null) {
//     break;
//   }

//   let number = Number(input)
  
//   if (isNaN(number)) {
//     alert('Було введено не число, попробуйте ще раз');

//     continue;
//   }

//   numbers.push(number);
// }
// if (numbers.length > 0) {
//   for (let num of numbers) {
    
//     total += num;
//   }

//   console.log(`Загальна сума чисел дорівнює ${total}`);
// } else {
//   console.log('Масив порожній.');


// }
