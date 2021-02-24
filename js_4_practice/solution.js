// 1) Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.
// function rgb(a, b, c) {
// let element = document.createElement('p');
// element.style.background = rgb(a, b, c);
// document.body.appendChild(element);
// }
// rgb(20, 848, 123);
// function rgb(...x) {
//     if (x === undefined){
//         console.log('0');
//     } else {
//         console.log(x);
//     }
// }
// rgb(20, 45, 3);
// rgb();
//
// 2) создать функцию которая будет принимать два массива:
// - с ключами
// - с значениями
// и будет возвращать объект полученный в результате склеивания этих двух массивов
// пример:
// zip(['name', 'age', 'status'], ['Kira', 12, false])  —>  { name: 'Kira', age: 12, status: false }
// function arrays([...x], [...y]) {
//     let obj = {};
//     for (let i = 0; i < x.length; i++) {
//         obj[x[i]] = y[i];
//     }
//     return obj;
// }
// console.log(arrays(['name', 'age', 'status'], ['Kira', 12, false]));
//
// 3) создать функцию которая будет принимать любое количество чисел,
// и будет возвращать массив без дубликатов uniq(1, 2, 2, 3, 4, 2, 4, 5) —> [1,2,3,4,5]
// function uniq(...x) {
//     let result = [];
//     for (const iterator of x) {
//         if (!result.includes(iterator)) {
//             result.push(iterator);
//         }
//     }
//     return result;
// }
// console.log(uniq(2, 1, 5,2, 1));
//
// 4) создать функцию которая принимает число (высоту) и делает половину пирамидки (как в игре марио)
// function zzz(h) {
//    
// }
// zzz(5);