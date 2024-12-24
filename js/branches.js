// Розгалуження "if"
// if(5){
//     console.log("це число")
// }


// Розгалуження "if...else"
// const age = prompt("скільки вам років?");
// if (age > 18 || age === 18){
//  alert(`Ви повнолітній! Вам ${age} років`);
// } else{
//     alert(`Тобі ${age} ти не повнолітній!`);
// }

// оператор розгалуження esle...if
// const salary = prompt("яка ук вас зарплата?");
// if(salary < 10000){
//   alert(`у вас низька зарплата яка складає ${salary}`)
// }else if(10000 <= salary && salary < 20000){
//     alert(`у вас середня зарплата яка складає ${salary}`)
// }else if(salary >= 20000){
//     alert(`у вас висока зарплата яка складає ${salary}`)

// }

const personName ="Arsen";
const askName = prompt("Вгадайте ім'я мого друга");
// if(askName.toLocaleLowerCase() === personName.toLocaleLowerCase()){
//     alert(`ви вгадали ім'я мого друга ${askName}`)
// }else{
//     alert(`ви не вгадали ім'я мого друга, його звати ${personName} а ви написали ${askName}`)
// }

// тернальний оператор
// умова ? те що вертаемо при true : те що вертаемо при false
const message = (askName.toLocaleLowerCase() === personName.toLocaleLowerCase()) ? `ви вгадали ім'я мого друга ${askName}`: `ви не вгадали ім'я мого друга, його звати ${personName} а ви написали ${askName}`;
alert(message);


