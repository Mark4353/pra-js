// const clients =["Alex","Mary","Anna","Viktor"];
// let message ='';
// const clientName = "Mary";

// for (let i = 0; i <clients.length; i++){
// message = clients[i].includes(clientName) ?`користувач ${clientName} знайденно`:`користувач ${clientName} не знайденно`;
// // if(clientName === clients[i]){
// //     message = `користувач ${clientName} знайденно`;
// //     break;
// // }else{
// //     message = `користувач ${clientName} ne знайденно`;
// // }
// }
// console.log(message);

// for(let i = 0 ; i< clients.length; i++){
// console.log(clients[i]);
// }
// const friends =["Alex","Mary","Anna","Viktor"];
// // for(const client of clients){
// // console.log(friends);
// // }



// // Написати скрипт який порахує сумму всіх парних чисел в масиві
// // const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// // let total = 0;

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    total = total + numbers[i];
  }
}
console.log(total);

 
// for(const number of numbers){
//      total = number + total 
//     if(number % 2 === 0){
        
//     }

// }

// for...of
const basket = [
    {price:4000},
    {price:1000},
    {price:5000}
];
for(const item of basket){
    console.log(`price:${item.price}`);
}
// for...in
const baskets = {
    laptop: 1500,
    Mouse: 25,
    keyboard: 100,

};

for(const key in basket){
    const price = baskets[key];
    console.log(`prise of ${key} is ${price}`);
}
// for
const names = ["Laptop","Mause","keyboard"];
const prices =[1500, 25, 100];

for(let i =0;i < names.length; i++){
    console.log(`price of ${names[i]} is ${prices[i]}`);
}

// do...while

let a = 0;
while (a < 10){
    console.log(a++);
}

let i = 0;
do {
    console.log(i++);
}while(i < 10);

// continue

let q = 0;
while (q < 10){
    q++;
    console.log("hello",q);
    if(q===5) continue;
    console.log("world");
   
}

