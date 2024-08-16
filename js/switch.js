// const typeOfSub = prompt("Введіть тип підписки").toLowerCase();
// standart regular vip
// if(typeOfSub === 'standart'){
//     alert("ціна підписки складає 50 грн!")
// }else if(typeOfSub === 'regular'){
//     alert("ціна підписки складає 30 грн!")
// }else if(typeOfSub === 'vip'){
//     alert("ціна підписки складає 100 грн!")
// }else{
//     alert("оберіть існуючий тип підписки")
// }
// switch(typeOfSub){
//     case "standart".toLocaleLowerCase():
//     alert("ціна підписки складає 50 грн!");
//     break;
//     case "regular".toLocaleLowerCase():
//     alert("ціна підписки складає 30 грн!");
//     break;
//     case "vip".toLocaleLowerCase():
//         alert("ціна підписки складає 100 грн!");
//         break;
//         default:
//             alert("оберіть існуючий тип підписки");

// }

// switch(Що порівнюємо){
//     case" з чим порівнюємо":
//     якщо case true то робимо інструкцію;
//     break;

//     case" з чим порівнюємо":
//     якщо case true то робимо інструкцію;
//     break;

//     case" з чим порівнюємо":
//     якщо case true то робимо інструкцію;
//     break;

//    default:
//    виконується інструкція
// }
// const a = 5;
// const a = 10;
// if(balance > 1){
//     let message = "Ваш баланс позитивний!"
//     console.log(message);

//  } else {
//     let message = "Ваш баланс негативний!"
//     console.log(message);

//  }

//  const message = (balance > 1) ? "Ваш баланс позитивний!":"Ваш баланс негативний!";
//  console.log(message);

// Використовуючи конструкцію if..else, 
// напишіть код, що запитує: ‘Яка “офіційна” 
// назва JavaScript?’ Якщо відвідувач вводить 
// “ECMAScript”, виведіть “Правильно!”, в іншому випадку
//  — виведіть: “Ви не знаєте? ECMAScript!”


const nameJs = "ECMAScript";
const askName =prompt("Яка “офіційна” назва JavaScript?");
if(askName === nameJs){
 alert("Правильно")
}else{
    alert('Ви не знаєте? ECMAScript!')
}
