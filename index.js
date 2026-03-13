//RESUELVE LOS EJERCICIOS AQUÍ

//Ejercicio 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;

//Ejercicio 2
const [{ email: emailLuis }] = empleados;

//Ejercicio 3
let a = 5;
let b = 3;

[a, b] = [3, 5];

//Ejercicio 4
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { today: maximaHoy } = HIGH_TEMPERATURES;
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;

//Ejercicio 5
const sumEveryOther = (...numeros) => {
  let suma = 0;
  for (const num of numeros) {
    suma += num;
  }
  return suma;
};

//Ejercicio 6
const addOnlyNums = (...argumentos) => {
  let suma = 0;
  for (argumento of argumentos) {
    if (typeof argumento === "number") {
      suma += argumento;
    }
  }
  return suma;
};
