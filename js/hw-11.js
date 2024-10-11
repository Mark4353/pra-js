
const bankAccount = {
    ownerName: "Іван Петрович",
    accountNumber: "123123",
    balance: 1350,


   
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Ви поповнили рахунок на $${amount}. Залишок: $${this.balance}`);
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Ви зняли $${amount}. Залишок: $${this.balance}`);
        } else {
            console.log("Недостатньо коштів");
        }
    },
    displayInfo: function() {
        console.log(`Власник рахунку: ${this.ownerName}`);
        console.log(`Номер рахунку: ${this.accountNumber}`);
        console.log(`Баланс: $${this.balance}`);
    }
};

bankAccount.displayInfo();
const depositAmount = parseFloat(prompt("Введіть суму для поповнення:"));
if (!isNaN(depositAmount) && depositAmount > 0) {
    bankAccount.deposit(depositAmount);
} else {
    console.log("введіть коректну суму для поповнення.");
}

const withdrawAmount = parseFloat(prompt("Введіть суму для зняття:"));
if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    bankAccount.withdraw(withdrawAmount);
} else {
    console.log("введіть коректну суму для зняття.");
}
bankAccount.displayInfo();

const usMessage =alert("Перейти до наступного завдання(2)");


const weather = {
    temperature: 0,
    humidity: 50, 
    windSpeed: 10, 

   
    isBelowZero: function() {
        return this.temperature < 0;
    }
};


const temperatureInput = parseFloat(prompt("Введіть температуру в градусах Цельсія"));


if (!isNaN(temperatureInput)) {
  
    weather.temperature = temperatureInput;

    
    const resultText = weather.isBelowZero()
        ? "Температура нижче 0 градусів "
        : "Температура вище 0 градусів ";

   
    alert(resultText);
} else {
    alert("введіть коректне числове значення температури");
}


const usMessage2 =alert("Перейти до наступного завдання(3)");


const user = {
    name: "",       
    email: "",      
    password: "",   

 
    login: function(inputEmail, inputPassword) {
       
        if (this.email === inputEmail && this.password === inputPassword) {
            console.log(`Ласкаво просимо, ${this.name} ви успішно увійшли в систему`);
        } else {
            console.log("Невірний email або пароль, спробуйте ще раз");
        }
    }
};


user.name = prompt("Введіть ваше ім'я");
user.email = prompt("Введіть ваш email");
user.password = prompt("Введіть ваш пароль");


const inputEmail = prompt("Введіть email");
const inputPassword = prompt("Введіть ваш  пароль");


user.login(inputEmail, inputPassword);

const usMessage3 =alert("Перейти до наступного завдання(4)");

 
const movie = {
    title: "Movie",         
    director: "Christopher Kolumb", 
    year: 2019,                   
    rating: 9.8,                 

    isHighRated: function() {
        return this.rating > 8;
    }
};

function movieInConsole(movie) {

    const titleText = movie.isHighRated() 
        ? `%cTitle: ${movie.title}` 
        : `Title: ${movie.title}`;
    const titleStyle = movie.isHighRated() ? 'color: green;' : '';

    console.log(titleText, titleStyle);
    console.log(`Director: ${movie.director}`);
    console.log(`Year: ${movie.year}`);
    console.log(`Rating: ${movie.rating}`);
}
movieInConsole(movie);

