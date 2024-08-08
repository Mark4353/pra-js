console.dir(Boolean);

console.log(Boolean(0));
console.log(Boolean(1));
const message = "цукцук цукцук цукцук";
console.log(Number(message));
console.log(Boolean(message));
console.log(Boolean(""));
console.log(Boolean(null));

// логічний оператор і and &&
// запинаеться на неправді, вертае те на чому запнулось або останній оперант true
console.log(5 && "HelloWorld" && 70);
console.log(1 && 0 && "3434");
console.log("" && 12 && undefined);
console.log("Mark" && !4 && null && 2);

// логічне НЕ  (оператор-!)
console.log(!0);
console.log(!100);
console.log(!"");
console.log(!"123");
console.log(!null);
console.log(!undefined);
console.log(!false);

// логічний оператор або, запинаеться на правді чи оствнній операнд
console.log(1 || 9);
console.log(1 || "a");
console.log(null || undefined || "76");
console.log("null" || undefined || 76);
console.log(0 || NaN || undefined);

console.log(("55" && 0) || 2);
console.log(2 || (0 && 55));
console.log(null || ("65" && "99"));
console.log(8 || (12 && "77") || (!9 && 8 && "1"));

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

const isOnline = false;
const isFriend = true;
const isDnd = false;

console.log(
  `Чи ми можем розпочати чат користувача: ${isOnline && isFriend && !isDnd}`
);
