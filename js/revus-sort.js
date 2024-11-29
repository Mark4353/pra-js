
// //! потрібно сформувати message в масиві е такі числа  1,2,3,4,5 

// const numbers = [
//     1,2,3,4,5
// ];
//  const message = alert(numbers);
// console.log(`це рядок має ${numbers}`);

// const messages = numbers.reduce((msg, num,index)=>{
// return msg + (index === 0 ? "" : "," ) + num;
// },"це рядок має: ");
 
// console.log(messages);
//          //* msg + "," + num   
//          if (index === 0){
//             msg + "" + num 
//          }else{
//             msg + "," + num 
//          };          
// //*крок 1 "це рядок має: " + "," + 1
// //? у результаті вийде рядок "це рядок має: 1"
// //* крок 2 спрацював кул-бек, вийде "це рядок має: 1"+" " ,"2 
// //?  вийде рядок "це рядок має: 1 ,2"

// //!? перший крок ми розвисуема кул-бек з почастконим значенням "цей рядок має"
// //!? крок два з enyNum там приходять елемент number тобто(3) який додаеться до акумулятора
// //!?крок три в anyNum там приходять елементи number тобто (4) який додаеться до акумулятора
// //!?крок чотири в anyNum там приходять елементи number тобто (8) який додаеться до акумулятора
// //!?крок пять в anyNum там приходять елементи number тобто (12) який додаеться до акумулятора
// //!?у результати ми отримали значення акумулятора та значення які додавалися до нього тобто (цей рядок має 34812)

//! Метод sort сортуе елементи у масиві по зростанню від мменшого до більшого або по алфавіту; цей метод змінюе орегінальний масив
//!щоб не змінити дані орегінального масиву спочатку зробимо копію у якій будемо сортумати елементи
const numbers = [2,1,2,3,4,5,6,7,8,9];

//!зробимо купію масива
//!const copiNam = [...numbers];
//! const copyNambers = numbers.slice();
const copyNambers = numbers.splice(0);
const sortNum = copyNambers.sort();
console.log(sortNum);
//[1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

// const sortReversNum1 =  copyNambers.sort((a,b)=> a - b );
// console.log(sortReversNum1);
//[1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

const sortReversNum2 =  copyNambers.sort((a,b)=> b - a );
console.log(sortReversNum2);
//[9, 8, 7, 6, 5, 4, 3, 2, 2, 1];



//! Відсортуйте масив об'єктів за зростанням значення властивості date в форматі dd/mm/yyyy.
// const events = [
//     { name: 'Event 1', date: '10/02/2023' },
//     { name: 'Event 2', date: '15/03/2023' },
//     { name: 'Event 3', date: '01/01/2023' },
//     { name: 'Event 4', date: '01/02/2023' }
//   ];
 
//   events.sort((a, b) => {
//     const dateA = new Date(a.date.split('/').reverse().join('-'));
//     const dateB = new Date(b.date.split('/').reverse().join('-'));

//     return dateA - dateB;
//   });
// console.log(events);


//*! Відсортуйте масив об'єктів за спаданням значення властивості popularity, а при однаковому значенні popularity
//*! - за алфавітом значення властивості name.
// const items = [
//     { name: 'Item A', popularity: 5 },
//     { name: 'Item C', popularity: 2 },
//     { name: 'Item D', popularity: 3 },
//     { name: 'Item B', popularity: 5 }
//   ];

//   items.sort((a,b)=>{
//     if(a.popularity === b.popularity){
//         return a.name.localeCompare(b.name);
//     }else{
// return b.popularity - a.popularity;
//   }
    
//   }
// );
//   console.log(items)

// Відсортуйте масив об'єктів за спаданням значення властивості price, а при однаковому значенні price 
// - за зростанням значення властивості quantity.
// const products = [
//     { name: 'Product 1', price: 100, quantity: 5 },
//     { name: 'Product 2', price: 50, quantity: 10 },
//     { name: 'Product 3', price: 200, quantity: 2 },
//     { name: 'Product 4', price: 50, quantity: 5 }
//   ];

// products.sort((a,b)=>{
// if(a.price === b. price){
//     return a.quantity - b.quantity ;
// }else{
//     return b.price - a.price ; 
// }
// });
// console.log(products);


// Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];

arr.sort((a,b) =>{
return a.name.localeCompare;
});

console.log(arr)