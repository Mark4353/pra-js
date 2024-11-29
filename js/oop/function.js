//? Фнкции конструкторит - це шаблони за якими ми може створювати модель( шаюлон ) а на базі моделі створюемо екземпляр

// const Car = function (modelCar, priseCar, colorCar) {
//   this.modal4x4 = modelCar;
//   this.price = priseCar;
//   this.color = colorCar;
// };

// const bmw = new Car("bmw", 35000, "black");
// console.log(bmw);

// const toyota = new Car("toyota", 25000, "white");
// console.log(toyota);
// об'єкт параметрів це коли ми передаемо аргументи и передаемо у вигляди об'єкта

const Car = function (data) {
  this.modal4x4 = data.modelCar;
  this.price = data.priseCar;
  this.color = data.colorCar;
};

const dataBmw = {
  modalCar: "bmw",
  priceCar: 35000,
  colorCar: "black",
};
const bmw = new Car(dataBmw);
console.log(bmw);

const dataToyota = {
  modalCar: "toyota",
  priceCar: 25000,
  colorCar: "white",
};

const toyota = new Car(dataToyota);
console.log(toyota);
