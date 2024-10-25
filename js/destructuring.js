const product ={
    name:"banana",
    price: 25,
    photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FFresh-Banana-Fruit-Each%2F44390948&psig=AOvVaw1BEcgDCGykRJ8B-JtQCkav&ust=1728897867027000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIi_3M6Ei4kDFQAAAAAdAAAAABAE",
    info: {
        city:"khatkiv",
        country:"Ukranian"
    }
    
}
// const{name, price, photo, info} = product;
// console.log(name, price,photo,info)
// const productCountry = product.info.country;

// console.log(productCountry);

// const producTCity = product.info.city;

// глибока деструктурезація

// const{ city, country} = product.info;
// console.log(city)



// Синтаксис деструктурізації
// const {назва ключа} = назва обєкта


// const { info } = product;

// console.log(info);


// якщо нам треба витянути ключи з глибшо вкладаннего обєкта то використовуемо катий синтаксис

// const { info: {city,country} } = product;

// console.log(city,country);



// const { weight = 0.25, name = "no name" } = product;
// console.log(weight,name);
// let info = "test";


// const {info: prodInfo, ...information} = product;
// // {info: prodInfo}-переназиваемо зміну info  через ...rest збираемо всі ключі в інший обєкт information
// console.log(info, information);

// деструктуризація масивів

// const rgb =[200,255,100];
// const[red,green,blue]=rgb;


// const products = [
//     {
//         title: "tomato",
//         price: 25
//     },
//     {
//         title: "cucumber",
//         price: 33
//     },
//     {
//         title: "potato",
//         prise: 29
//     }

// ]


// const tomatoProduct = products[0];
// console.log(tomatoProduct);
// const [tomatoProduct, cucumberProduct, potatoProduct, bananaProduct = {}] = products;
// console.log(tomatoProduct, cucumberProduct, potatoProduct, bananaProduct);

// const [tomatoProduct, ...oherProducts] = products;
// console.log(tomatoProduct, oherProducts);

// const [ , cucumberProduct, ] = products;
// console.log(cucumberProduct);

// let [tomatoProduct, ,potatoProduct] = products;

// console.log(tomatoProduct, potatoProduct);
// tomatoProduct = {...tomatoProduct, country: "Ukraine"};

// console.log(tomatoProduct);







// Провести глибоку деструктуризацію об’єкту


// const musicLibrary = {
//     count: 2,
//     artists: [
//       {
//         name: 'The Beatles',
//         albums: [
//           {
//             title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
//             year: 1967,
//             tracks: [
//               { title: 'With a Little Help from My Friends', duration: '2:44' },
//               { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
//               { title: 'A Day in the Life', duration: '5:33' }
//             ]
//           },
//           {
//             title: 'Abbey Road',
//             year: 1969,
//             tracks: [
//               { title: 'Come Together', duration: '4:19' },
//               { title: 'Something', duration: '3:01' },
//               { title: 'Here Comes the Sun', duration: '3:06' }
//             ]
//           }
//         ]
//       },
//       {
//         name: 'Pink Floyd',
//         albums: [
//           {
//             title: 'The Wall',
//             year: 1979,
//             tracks: [
//               { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
//               { title: 'Comfortably Numb', duration: '6:23' },
//               { title: 'Hey You', duration: '4:40' }
//             ]
//           },
//           {
//             title: 'Dark Side of the Moon',
//             year: 1973,
//             tracks: [
//               { title: 'Speak to Me/Breathe', duration: '3:58' },
//               { title: 'Time', duration: '7:06' },
//               { title: 'Money', duration: '6:22' }
//             ]
//           }
//         ]
//       }        
//     ]
// }


// const {
//     count,
//     artists: [
//       {
//         name,
//         albums: [
//           {
//             title,
//             year,
//             tracks: [
//               { title: trackTitle1, duration: duration1 },
//               { title: trackTitle2, duration: duration2 },
//               { title: trackTitle3, duration: duration3 },
//             ],
//           },
//           {
//             title: title2,
//             year: year2,
//             tracks: [
//               { title: trackTitle4, duration: duration4 },
//               { title: trackTitle5, duration: duration5 },
//               { title: trackTitle6, duration: duration6 },
//             ],
//           },
//         ],
//       },
//       {
//         name: name2,
//         albums: [
//           {
//             title: title3,
//             year: year3,
//             tracks: [
//               { title: trackTitle7, duration: duration7 },
//               { title: trackTitle8, duration: duration8 },
//               { title: trackTitle9, duration: duration9 },
//             ],
//           },
//           {
//             title: title4,
//             year: year4,
//             tracks: [
//               { title: trackTitle10, duration: duration10 },
//               { title: trackTitle11, duration: duration11 },
//               { title: trackTitle12, duration: duration12 },
//             ],
//           },
//         ],
//       },
//     ],
//   } = musicLibrary;


// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента 
// (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для
    //  повернення середньої оцінки студента.
const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };
 
const calculateAverageGrade = function (student) {
const[grades] = student
let allMarks = 0;
for(const mark of grades){
 allMarks += mark
}
const resault = allMarks / grades.length;
return resault;

}

  console.log(calculateAverageGrade(student));



