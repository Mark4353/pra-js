// // 1

const teext = alert("Введіть те що ви бажаете замовити");
const text = prompt();

    if (text.includes("Кава")) {
        alert(`Замовлення прийнято. Ви замовили ${text} з вас 30 грн`);
    } else if(text.includes("Чай")) {
        alert(`Замовлення прийнято. Ви замовили ${text} з вас 35 грн`);
    } else if(text.includes("Сік")) {
        alert(`Замовлення прийнято. Ви замовили ${text} з вас 25 грн`);
    } else{
        alert("Замовлення не прийнято");
    }
//     //  Кава   Чай   Сік

// 2

const dayText = alert("Введіть день тижня");
const texts = prompt();

    if (texts.includes("Понеділок")) {
        alert(`${texts} це робочій день`);
    } else if(texts.includes("Вівторок")) {
        alert(`${texts} це робочій день`);
    } else if(texts.includes("Середа")) {
        alert(`${texts} це робочій день`);
    } else if(texts.includes("Четверг")) {
        alert(`${texts} це робочій день`);
    }else if(texts.includes("П'ятниця")) {
        alert(`${texts} це робочій день`);
    } else{
        alert("Вихідний");
    }

// 3

const monthText = alert("Введіть місяць року");
const mText = prompt();
if(mText === "12" || "2" || "1"){
alert("Це місяці зими")
}else if(mText === "3" || "4" || "5"){
    alert("Це місяці весни")
}else if(mText === "6" || "7" || "8"){
    alert("Це місяці літа")
}else if(mText === "9" || "10" || "11"){
    alert("Це місяці осіні")
}else{
    alert("Місяця під таким номером немає")
}

// 4

const numText = alert("Введіть номер місяця щоб дізнатися скільки в ньому днів");
const nunbers = prompt();

    if (nunbers.includes("1")) {
        alert(`31`);
    } else if(nunbers.includes("2")) {
        alert(`8 `);
    } else if(nunbers.includes("3")) {
        alert(`1  `);
    }  else if(nunbers.includes("4")) {
        alert(`30 `);
    } else if(nunbers.includes("5")) {
        alert(`31 `);
    }else if(nunbers.includes("6")) {
        alert(`30 `);
    }else if(nunbers.includes("7")) {
        alert(`31 `);
    }else if(nunbers.includes("8")) {
        alert(`31 `);
    }else if(nunbers.includes("9")) {
        alert(`30 `);
    }else if(nunbers.includes("10")) {
        alert(`31 `);
    }else if(nunbers.includes("11")) {
        alert(`30 `);
    }else if(nunbers.includes("12")) {
        alert(`31 `);
    }else{
        alert("Такого Такого місяця немає");
    }
    

// 5

const colorText = alert("Введіть колір світлофора щоб дізнатися що робити на світлофорі");
const textes = prompt();

    if (textes.includes("червоний")) {
        alert(`${textes} - Стій`);
    } else if(textes.includes("жовтий")) {
        alert(`${textes} - Увага `);
    } else if(textes.includes("зелений")) {
        alert(`${textes} - Йди `);
    }else{
        alert("Такого кольору немає на світлофорі");
    }

// 6

        let number1 = parseFloat(prompt("Введіть число:"));
        let number2 = parseFloat(prompt("Введіть друге число:"));
        const warn = alert("Попередження на 0 ділити не можна!");
        let operation = prompt("Оберіть операцію (+, -, *, /):");
                

        if (operation === "+") {
            alert(number1 + number2)
        } else if (operation === "-") {
            alert(number1 - number2)
        } else if (operation === "*") {
            alert(number1 * number2)
        } else if (operation === "/") {
            alert(number1 / number2)
        } else {
            alert("Невірна операція!");
        }

