let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
      break;
    }
    console.log(numbers[i]);
  }
  
  let n = 7; 
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
  if (number[i] >= n) {
    break;
  }
  console.log(number[i]);
}

let q = 1;

while (q <= 20) {
  if (q % 3 === 0) {
    q++;
    continue;
  }
  console.log(q);
  q++;
}


