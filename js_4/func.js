//- створити функцію яка виводить масив
// function array([...x]) {
//     let arr = [...x];
//     for (const iterator of arr) {
//         console.log(iterator);
//     }
// }
// array(['yellow', 'green', 'red', 'blue', 'white']);
//
// - створити функцію яка заповнює масив рандомними числами та виводить його.
//  Для виведення використати попвередню функцію.
// function random() {
//     let ran = [];
//     for (let i = 0; i < 10; i++) {
//         ran[i] = Math.random();
//     }
//     array(ran);
// }
// random();
//
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// min(5, 8, 1);
//
//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// max(20, 500,3);
//
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function some(...x) {
//     console.log(Math.max(...x));
//     let min = Math.min(...x)
//     return min;
// }
// some(20, 5, 2);
//
//- створити функцію яка виводить масив
// function array([...x]) {
//     let arr = [...x];
//     for (const iterator of arr) {
//         console.log(iterator);
//     }
// }
//
//- створити функцію яка повертає найбільше число з масиву
// function max([...x]) {
//     let arr = [...x];
//     let res = Math.max(...arr);
//     return res;
// }
// console.log(max([20, 3, 5]));
//
//- створити функцію яка повертає найменьше число з масив
// function min([...x]) {
//     let array = [...x];
//     let res = Math.min(...array);
//     return res;
// }
// console.log(min([299, -4, 57, 890]));
//
//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function suma([...x]) {
//     let array = [...x];
//     let count = 0;
//     for (const iterator of array) {
//         count += iterator;
//     }
//     return count;
// }
// console.log(suma([100, 310, 790]));
//
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmetic([...x]) {
//     let array = [...x];
//     let count = 0;
//     for (const iterator of array) {
//         count += iterator;
//     }
//     return count / array.length;
// }
// console.log(arithmetic([50, 100, 30]));
//
//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function count([...x]) {
//     let array = [...x];
//     let total = 0;
//     for (const iterator of array) {
//         total++;
//     }
//     return total;
// }
// console.log(count([
//     {
//         name: 'Ira',
//         age: 22
//     },
//     {
//         name: 'Katya',
//         age: 23
//     }
// ]));
//
//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
