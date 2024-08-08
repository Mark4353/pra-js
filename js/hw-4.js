function checkFields() {
    const field1 = document.getElementById("field1").value;
    const field2 = document.getElementById("field2").value;
    
    if (field1 && field2) {
        alert("Обидва поля заповнені");
    } else {
        alert("Не всі поля заповнені");
    }
}

function checkNumbers(){
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const sum = number1 + number2;

    if (sum > 10) {
        alert("Сума більша за 10");
    } else {
        alert("Сума менша або дорівнює 10");
    }
}

function checkjs() {
    const text = document.getElementById("textJs").value;
    
    if (text.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
    // JavaScript
}

function checkRange() {
    const number = parseFloat(document.getElementById("numberInput").value);
            
    if (number > 9 && number < 21) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
}

function validateForm() {


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    if (name.length < 3) {
        alert("Ім'я повинно містити не менше 3 символів");
        return false;
    }


    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
        alert("Email повинен містити символ @ та крапку після нього");
        return false;
    }

  
    if (password.length < 6) {
        alert("Пароль повинен містити не менше 6 символів");
        return false;
    }
}