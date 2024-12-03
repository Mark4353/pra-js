//*? Метод queruSelector знаходить потрібний нам елемент у ДОМ-дереві

//* const boxElement = document.querySelector("div"); витягуємо елемент через назву тегу
//* const boxElement = document.querySelector(".box");витягуємо елемент через назву классу
//* console.log(boxElement);

//* const linkElement = boxElement.querySelector() ;
//* const linkElement = document.querySelector(`[ href="https://www.google.com/" ]`) ; витягуемо елемент через його атребут
//* console.log(linkElement);

// elem.parentNode — вибере батька elem
// elem.childNodes — псевдомасив зберігає всі дочірні елементи, включаючи текстові.
// elem.children — псевдомасив зберігає тільки дочірні вузли-елементи, тобто відповідні тегам.
// elem.firstChild — вибере перший дочірній елемент всередині elem, включаючи текстові вузли.
// elem.firstElementChild — вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild — вибере останній дочірній елемент всередині elem, включаючи текстові вузли.
// elem.lastElementChild — вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling — вибере елемент "зліва" від elem (його попереднього сусіда)
// elem.previousElementSibling - вибере вузол-елемент "зліва" від elem (його попереднього сусіда)
// elem.nextSibling — вибере елемент "справа" від elem (його наступного сусіда)
// elem.nextElementSibling — вибере вузол-елемент "справа" від elem (його попереднього сусіда)

// const allItems = document.querySelectorAll("li");отрімуемо маси елементів li
// console.log(allItems)

// const listElement = document.querySelector("ul");
// console.log(listElement);

// const allItems = listElement.children;
// console.log(allItems);

// const firstItem = listElement.firstElementChild;
// console.log(firstItem);

// const lastItem = listElement.lastElementChild;
// console.log(lastItem);


// const siteNav = document.querySelector("ul");
// console.log(siteNav);

// siteNav.style.backgroundColor = "yellow";

// siteNav.firstElementChild.firstElementChild.classList.add("site-nav__link"); 

// const siteHref = siteNav.querySelector([href="https://"]);
// siteHref.style.fontSize = "30px";
// console.log(siteHref);


// 1. Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// 2. Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// 3. Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// 4. Замініть клас на заголовку.
// 5. Перевірте чи містить посилання клас list

const outhrefElements = document.querySelectorAll(`[href^="http://"]`);
outhrefElements.forEach((elem) => (elem.style.color = "orange"));