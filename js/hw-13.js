console.log("--2--");
const account = {
  balance: 0,
  transactionHistory: [],

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (amount <= 0) {
      console.error("Сума має бути більше нуля.");
      return;
    }
    this.balance += amount;
    this.addTransaction("deposit", amount);
    console.log(
      `Рахунок поповнено на ${amount} грн. Новий баланс: ${this.balance} грн.`
    );
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.error("Сума має бути більше нуля.");
      return;
    }
    if (amount > this.balance) {
      console.error("Недостатньо коштів на рахунку.");
      return;
    }
    this.balance -= amount;
    this.addTransaction("withdraw", amount);
    console.log(
      `З рахунку списано ${amount} грн. Залишок: ${this.balance} грн.`
    );
  },
  getTransactionHistory() {
    if (this.transactionHistory.length === 0) {
      console.log("Історія транзакцій порожня.");
      return;
    }
    console.log("Історія транзакцій:");
    this.transactionHistory.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type}, Сума: ${
          transaction.amount
        } грн, Дата: ${transaction.date}`
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

