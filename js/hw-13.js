console.log("--1--");
const user = {
  name: "Mark",
  age: 24,
  hobby: "ride-a-bike",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

console.log("--2--");

function countProps(obj) {
  const { length } = Object.keys(obj);
  return length;
}
console.log(countProps(user));

console.log("--3--");

const employees = {
  Tim: 7,
  Rob: 10,
  Bob: 12,
};
function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [employee, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
}
console.log(findBestEmployee(employees));

console.log("--4--");

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}
console.log(countTotalSalary(employees));

console.log("--5--");

const products = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800 },
];

function getAllPropValues(arr, prop) {
  const values = [];
  for (const product of arr) {
    const { [prop]: value } = product;
    if (value !== undefined) {
      values.push(value);
    }
  }
  return values;
}

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "price"));

console.log("--6--");

const products2 = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800, quantity: 3 },
];

function calculateTotalPrice(allProducts, productName) {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }
  return 0;
}
console.log(calculateTotalPrice(products2, "Laptop"));
console.log(calculateTotalPrice(products2, "Phone"));
console.log(calculateTotalPrice(products2, "Tablet"));


console.log("--7--");
const account = {
  
  balance: 0,
  transactionHistory: [],

  getBalance() {
    return this.balance;
  },


  deposit(amount) {
    if (amount <= 0) {
      console.error('Сума має бути більше нуля.');
      return;
    }
    this.balance += amount;
    this.addTransaction('deposit', amount);
    console.log(`Рахунок поповнено на ${amount} грн. Новий баланс: ${this.balance} грн.`);
  },


  withdraw(amount) {
    if (amount <= 0) {
      console.error('Сума має бути більше нуля.');
      return;
    }
    if (amount > this.balance) {
      console.error('Недостатньо коштів на рахунку.');
      return;
    }
    this.balance -= amount;
    this.addTransaction('withdraw', amount);
    console.log(`З рахунку списано ${amount} грн. Залишок: ${this.balance} грн.`);
  },
  getTransactionHistory() {
    if (this.transactionHistory.length === 0) {
      console.log('Історія транзакцій порожня.');
      return;
    }
    console.log('Історія транзакцій:');
    this.transactionHistory.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type}, Сума: ${transaction.amount} грн, Дата: ${transaction.date}`
      );
    });
  },

  
  addTransaction(type, amount) {
    const transaction = {
      type,
      amount,
      date: new Date().toLocaleString(),
    };
    this.transactionHistory.push(transaction);
  },
};

account.deposit(1500); 
account.withdraw(450); 
console.log(`баланс: ${account.getBalance()} грн`); 
account.getTransactionHistory(); 
