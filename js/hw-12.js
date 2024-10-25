
console.log('--1--');
const user = {
    name: "Mark",
    age: 24,
    hobby: "ride-a-bike",
    premium: true
  };
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;

  for (const key of Object.keys(user)) {

    console.log(`${key}: ${user[key]}`);
  }

  console.log('--2--');
  
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  console.log(countProps(user));
  
  console.log('--3--');

  const employees = {
    Tim: 7,
    Rob: 10,
    Bob: 12
  };
  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
return bestEmployee;

  }
   console.log(findBestEmployee(employees)); 

   console.log('--4--');

  function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  console.log(countTotalSalary(employees));

  console.log('--5--');

  const products = [
    { name: "Laptop", price: 1000, quantity: 5 },
    { name: "Phone", price: 500, quantity: 10 },
     { name: "Tablet", price: 800 }
  ];

  function getAllPropValues(arr, prop) {
    const values = [];
for (const object of arr) {

      if (prop in object) {
        values.push(object[prop]);
      }

    }
  
return values;
  }

  console.log(getAllPropValues(products, "name"));    
  console.log(getAllPropValues(products, "quantity")); 
  console.log(getAllPropValues(products, "price"));   
  
console.log('--6--');


const products2 = [
    { name: "Laptop", price: 1000, quantity: 5 },
    { name: "Phone", price: 500, quantity: 10 },
{ name: "Tablet", price: 800, quantity: 3 }
  ];

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
     if (product.name === productName) {

        totalPrice = product.price * product.quantity;
        break;
      }
    }
return totalPrice;
  }
 console.log(calculateTotalPrice(products2,"Laptop")); 
  console.log(calculateTotalPrice(products2, "Phone"));  
  console.log(calculateTotalPrice(products2, "Tablet")); 