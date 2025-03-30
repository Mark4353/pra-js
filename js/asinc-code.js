// console.log("test 1");
// console.log("test 2");

// setTimeout(() => {
//   console.log("test 3");
// }, 5000);

// console.log("test 4");

// setTimeout(() => {
//   console.log("test 5");
// }, 2000);

// setInterval(()=>{
//     console.log("test");
// },10)

// const timer =document.getElementById("timer")
// const timerback =document.getElementById("timer2")
// const input = document.getElementById("input").value;

// let count = 0;
// const maxCount = 10;
// // input
// const intervalId = setInterval(()=> {
//     count++;
//     timer.textContent = `${count}`
//     if (count >= maxCount){
//         clearInterval(intervalId);
//         console.log("час вийшов");
//         timerback.textContent = "час вийшов"
//     }
// }, 1000) ;


// let time = 10;
// const minCount = 10;
// const backInterval = startTimer(()=>{
// time -= 1;
// timerback.textContent = `таймер ${time}`
// if (count === minCount){
//           clearInterval(backInterval);
//           console.log("час вийшов");
//           timerback.textContent = "час вийшов"
//       }
// },);

// setInterval(startTimer, 100)




// const box = document.querySelector(".box")

// setInterval(()=>{
//   if(box.scrollWidth > 100){
//     box.style.widht = `${box.scrollWidth - 1}px`
//     box.style.height = `${box.scrollHeight - 1}px`
//   }else{
//     box.style.widht = `${box.scrollWidth + 1}px`
//     box.style.height = `${box.scrollHeight + 1}px`

//   }
// }, 100)


// const changeColor = setInterval(() => {
//   box.style.backround = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`
// console.log("455");
// }, 3000);


// console.log("test");

// console.dir(Date);

// const date1 = new Date();

// console.log(date1);

// const date2 = new Date(1742700000000);//Sun Mar 23 2025 05:20:00 GMT+0200

// console.log(date2);

// const time = Date.now();
// console.log(time);

// const time2 = Date.now();


// setTimeout(()=>{
//   const time2 = Date.now();
//   console.log(time2);
//   const difference = time2 - time
//   console.log(difference);
// },5000)



const getYear = ()=>{
  const date = new Date();
  const year =date.getFullYear();
  return year;
};
console.log(getYear());

const getMounth = ()=>{
  const date = new Date()
  const mounth = date.getMonth()+1
  return mounth
};

console.log(getMounth());


const getMounthDay = ()=>{
  const date = new Date()
  const dayInMounth = date.getDate()
  return dayInMounth;
};

console.log(getMounthDay());


const getHours = ()=>{
  const date = new Date()
  const hours = date.getHours()
  return hours;
};

console.log(getHours());
















