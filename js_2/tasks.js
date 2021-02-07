// --створити масив та вивести його в консоль:
// - з 5 числових значень
// const numbers = [5, 87, 5346, 123, 0];
//
// - з 5 стічкових значень
// const fruits = ["apple", "orange", "pineapple", "grapefruit", "banana"];
//
// - з 5 значень стрічкового, числового та булевого типу
// const smth = ["elephant", 20, false, "omega", 5];
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const arr = [];
// arr[0] = 6;
// arr[1] = true;
// arr[2] = 'gray';
// for (const iterator of arr) {
//     console.log(iterator);
// }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>lorem</div>');                                                    
// }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>lorem' + i  + '</div>');                                           
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let h = 0;
// while(h < 20){
//     document.write('<h1>lorem</h1>');
//     h++;
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
// let h = 0;
// while (h < 20) {
//     document.write('<h1>lorem' + h + '</h1>');
//     h++;
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const arr = [10, 5, 3, 65, 9, 23, 876, 3, 65, 2];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const str = ['sun', 'yellow', 'loops', 'green', 'list', 'radio', 'cat', 'fun', 'rain', 'fruit'];
// for (const iterator of str) {
//     document.write(iterator + " ");
// };
//
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const all = [4, 78, false, 'table', true, 3.5, 'array', 3445, 'white', true];
// for (const iterator of all) {
//     console.log(iterator);
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const all = [4, 78, false, 'table', true, 3.5, 'array', 3445, 'true', true];
// for (let i = 0; i < all.length; i++) {
//     if (typeof all[i] === 'boolean'){                                 
//         console.log(all[i]);
//     }
// }
//
// -Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки числові елементи
// const all = [4, 78, false, 'table', true, 3.5, 'array', 3445, 'true', true];
// for (let i = 0; i < all.length; i++) {
//     if(typeof all[i] === 'number'){                                                 
//         console.log(all[i]);
//     }
// }
//
// -Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою
// if та typeof вивести тільки рядкові елементи
// const all = [4, 78, false, 'table', true, 3.5, 'array', 3445, 'true', true];
// for (let i = 0; i < all.length; i++) {
//     if(typeof all[i] === 'string'){
//         console.log(all[i]);
//     }
// }
//
// -Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.
// const arr = [];
// arr[0] = 'apple';
// arr[1] = 23;
// arr[2] = 56;
// arr[3] = false;
// arr[4] = 'round';
// arr[5] = 'true';
// arr[6] = 3.2;
// arr[7] = 7;
// arr[8] = 'eye';
// arr[9] = 123;
// for (const iterator of arr) {
//     console.log(iterator);
// }
//
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
//     document.write(i + 1);
// }
//
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
//     document.write(i + 1);
// }
//
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let count = 0;
// for (let i = 0; i < 100; i+=2) {
//     count++;
// }
//     for (let j = 0; j < count; j++) {
//         console.log(j + 1);
//     }
//
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 == 0 && i != 0){
//         console.log(i);
//         document.write(i);
//     }
// }
//
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 == 1 && i != 0){
//         console.log(i);
//         document.write(i);
//     }   
// }
//
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let m = 0;
// let s = 0;
// for (let i = 0; i < 60 && m != 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         console.log(j);
//         s = 0;
//     }
//     console.log('min: ' + ++m);
// }
//
//- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
let h = 0;
let m = 0;
let s = 0;
for (let k = 0; k < 24 && h != 2; k++) {
    for (let i = 1; i < 60; i++) {
        for (let j = 0; j < 60; j++) {
            console.log('sec:' + j);
            s = 0;
        }
        console.log('min' + i);
        m = 0;
    }
    console.log('hour:' + ++h);
}
//
//Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const arr = [ 'a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log(str);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const arr = [ 'a', 'b', 'c'];
// let str = '';
// let i  = 0;
// while(i < arr.length){
// str = str + arr[i];
// i++;
// }
// console.log(str);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const arr = [ 'a', 'b', 'c'];
// let str = '';
// for (const iterator of arr) {
//     str = str + iterator;
// }
// console.log(str);
//
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const arr = [ 'a', 'b', 'c'];
// let str = '';
// for (const key in arr) {
//     str = str + arr[key];
// }
// console.log(str);