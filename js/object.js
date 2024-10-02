// Вичисляючі властивості
const friendAge = "age";

const friend = {
    name : "Arsen",
    [friendAge]: 14,
    height: 180
}

console.log(friend.age);

// короткий запис валастивостей
// const color = "red";

// const favorireColor ={
//     firstColor: color,
//     secondColor:"blue",
//     lastColor:"green",
// }
// console.log(favorireColor.firstColor);


const firstColor = "red";

const favorireColor ={
    firstColor: firstColor,
    secondColor:"blue",
    lastColor:"green",
}




const user ={
    userName:"Oleg",
    userAdress:"qweqwe11A",
}
// const Adress = user.userAdress;

const secondAdress=user["userAdress"]
console.log(secondAdress);
// додавання обекта
user.heightUser = 190;
console.log(user);




// // Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'
// // єкту метод, який буде виводити 
// // на екран повідомлення про особистість 
// // зі значеннями всіх властивостей.

// const person = {
//     personName:'Ivan',
//     personAge:25,
//     personGender:"male",
//     getInfo(){
//         console.log(`name is ${this.personName}, age ${this.personAge}, gender ${this.personGender}.`)
//     }

// }
// person.getInfo()



// Створіть масив об'єктів "students",
//  де кожен об'єкт буде містити властивості "name", "age", "gender" 
//  та "grade".
//  Напишіть функцію, яка приймає масив об'єктів "students"
//   і повертає середній бал групи.



const students = [
{
    studentsName: "Alex",
    studentsAge: 26,
    studentsGender: "male",
    studentsGrade: 10,


},
{
    studentsName: "Max",
    studentsAge: 29,
    studentsGender: "male",
    studentsGrade: 9,
}

]
function averageGrade(students){
    let sumGrade = 0;
    for(const student of students){
    sumGrade +=students.grade;
}
const avarGrade = sumGrade /students.length;
return;
}
console.log(averageGrade(students));


const car = {
    drand: "BMW",  
    model:"m3",
    year: 2019,
    color:"while",
carInfo(){
    return `brend ${this.brand}, Model ${this.model}, color ${this.color}, year ${this.year}`;
}
}
console.log(car.carInfo);