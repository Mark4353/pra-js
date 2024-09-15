// ----1----
// const friends = ['Margo','poly','kiwi','ajax'];

// let string = '';

// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i < friends.length - 1) {
//         string += ',';
//     }
//   }
// console.log(friends);

// let save = friends.join(',');
// console.log(save); 

// ----2----3----

// const cards = [
//     'photo-1',
//     'photo-2',
//     'photo-3',
//     'photo-4',
//     'photo-5',
// ];

// const cardToRemove = 'photo-3';


// const index = cards.indexOf(cardToRemove);


// if (index !== -1) {
   
//     cards.splice(index, 1);
// }

// console.log(cards); 

// ----4----
// const cardToInset = [
//     'photo-1',
//     'photo-2',
//     'photo-3',
//     'photo-4',
//     'photo-5',
// ];
// cardToInset.splice(5, 0, 'photo-6');
// console.log(cardToInset);


// ----5----
const cardToUpdate = [
    'photo-1',
    'photo-2',
    'photo-3',
    'photo-4',
    'photo-5',
];
cardToUpdate.splice(3,0,'photo-4-02');

console.log(cardToUpdate);