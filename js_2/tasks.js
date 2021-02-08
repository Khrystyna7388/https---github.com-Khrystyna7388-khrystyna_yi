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
// let h = 0;
// let m = 0;
// let s = 0;
// for (let k = 0; k < 24 && h != 2; k++) {
//     for (let i = 1; i < 60; i++) {
//         for (let j = 0; j < 60; j++) {
//             console.log('sec:' + j);
//             s = 0;
//         }
//         console.log('min' + i);
//         m = 0;
//     }
//     console.log('hour:' + ++h);
// }
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
//
//
//
//                              ПРАКТИКА
//
//
//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr = arr[i];
//    console.log(newArr);
// }
//
//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);
// }
// console.log(arr);
//
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
//     arr.unshift(i);
// }
// console.log(arr);
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// let a = arr.shift();
// console.log(a);
//
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// let a = arr.pop();
// console.log(a);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr = [1, 2, 3, 4, 5];
// let a = arr.slice(3, 5);
// console.log(a);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr = [1, 2, 3, 4, 5];
// let a = arr.slice(0, 2);
// console.log(a);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(1, 2);
// console.log(arr);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let add = ['a', 'b', 'c'];
// // let a = arr.splice(3, 0, add);
// // console.log(arr);
// let b = arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);
//
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// let a = arr.splice(1, 0, 'a', 'b');
// let b = arr.splice(6, 0, 'c');
// let c = arr.splice(8, 0, 'e');
// console.log(arr);
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [2, 34, 987, 45, 2, 90, 54, 8, 1, 89];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] % 2 == 0){
//        console.log(arr[i]);
//    }
// }
//
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [2, 34, 987, 45, 2, 90, 54, 8, 1, 89];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
// }
// console.log(newArr);
//
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [2, 34, 987, 45, 2, 90, 54, 8, 1, 89];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr = arr[i];
//     console.log(newArr);
// }
//
//
//
//
//===============================================================================================
//===============================================================================================
//===============================================================================================
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }
//2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while(i < arr.length){
//     if(arr[i]%2 == 1){
//         console.log(arr[i]);
//     }
//     i++;
// }
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         console.log(arr[i]);
//     }
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while(i < arr.length){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
//     i++;
// }
//6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }
//7. замінити кожне число кратне 3 на слово "okten"
// let okten = 'okten';
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 3 == 0){
//         arr[i] = okten;
//     }
//     console.log(arr[i]);
//     document.write(arr[i] + " ");
// }
//
//8. вивести масив в зворотньому порядку.
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
//
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1. перебрати його циклом while
// let i = arr.length - 1;
// while(i >= 0){
//     console.log(arr[i]);
//     i--;
// }
//2. перебрати його циклом for
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = arr.length - 1;
// while(i >= 0){
//     if(arr[i] % 2 == 1){
//         console.log(arr[i]);
//     }
//     i--;
// }
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 2 == 1){
//         console.log(arr[i]);
//     }
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arr.length - 1;
// while(i >= 0){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
//     i--;
// }
//6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }
//7. замінити кожне число кратне 3 на слово "okten"
// let okten = 'okten';
// for (let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 3 == 0){
//         arr[i] = okten;
//     }
//     console.log(arr[i]);
// }
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// let arr2 = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         arr = i;
//         console.log(arr);
//     } else {
//         arr2 = i;
//         document.write(arr2 + ' ');
//     }
// }
//
//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.random();
//     console.log(arr[i]);    
// }
//
// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random() * 733) + 8;
//     console.log(arr[i]);
// }
//
// 2. вывести на консоль  каждый третий елемент
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 2; i < arr.length; i+=3) {
//     console.log(arr[i]);
// }
// 3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
// for (let i = 2; i < arr.length; i+=3) {
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);
//     }
// }
// 4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
// let arr = [2, 17, 14, 6, 22, 31, 45, 66, 100, -18];
// let newArr = [];
// for (let i = 2; i < arr.length; i+=3) {
//     if(arr[i] % 2 == 0){
//         newArr = arr[i];
//         console.log(newArr);
//     }
// }
//
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let arr = [2, 17, 14, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if((arr[i +1]) % 2 == 0){
//         console.log(arr[i]);
//     }   
// }
//
//масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let a = 0;
// for (let i = 0; i < arr.length; i++) {
//     // arr[i]+=a;
//     a+=arr[i];
// }
// let b = a / arr.length;
// console.log(b);
//
//створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let newArr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.random();
//     newArr = arr[i] * 5;
//     console.log(newArr);
// }
//
// створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо об 'єкт є числом,
// додати його в інший масив.
// let arr = [23, 5, 'green', false, 'r', 78];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number'){
//         newArr = arr[i];
//         console.log(newArr);
//     }
// }