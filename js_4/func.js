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
//
//                                          NEW NEW NEW
//
//
//
//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function keys([...x]) {
//     let array = [...x];
//     let count = 0;
//     for (const iterator of array) {
//         for (const key in iterator) {
//             if (Object.hasOwnProperty.call(iterator, key)) {
//                 count++;

//             }
//         }
//     }
//     return(count);
// }
// console.log(keys([
//         {
//             name: 'Ira',
//             age: 22
//         },
//         {
//             name: 'Katya',
//             age: 23
//         }
//     ]));
//
//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function newArray([...x], [...y]) {
//     let nArray = [];
//     let fArray = [...x];
//     let sArray = [...y];
//     for (let i = 0; i < fArray.length; i++) {
//         nArray.push(fArray[i] + sArray[i]);
//     }
//     return nArray;
// }
// console.log(newArray([2, 3, 4], [1, 3, 5]));
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function div (s){
//     const block = document.createElement('div');
//     block.innerText = s;
//     document.body.appendChild(block);
// }
// div('Hello owu');
//
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function append(element, text) {
//     const div = document.createElement(element);
//     div.innerText = text;
//     document.body.appendChild(div);
// }
// append('div', 'hello');
//
//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function change([...x], i) {
//     let array = [...x];
//     for (let j = 0; j < array.length; j++) {
//         if (j === i) {
//         array[j] = array.splice(j, 0, j+1);                                           ЧИ ПРАВИЛЬНО????????
//         }
//         document.write(j);                                                 ВИВІД: [1, Array(0), 2, 3]
//     }
//     console.log(array);
// }
// change([1, 2, 3], 1);
//
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//  Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// function zero([...x]) {
//     let array = [...x];
//     let withZero = [];
//     let withoutZero = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             withZero.push(array[i]);
//         } else {
//             withoutZero.push(array[i]);
//         }
//     }
//     const add = withoutZero.concat(withZero);
//     console.log(add);
// }
// zero([1, 4, 0, 2, 0, 1]);
//
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let carsArray = (
//     [{
//             model: 'Mercedes-Benz',
//             manufactureYear: 2019,
//             power: 300,
//             color: 'black',
//             chauffeur: {
//                 name: 'Oleh',
//                 age: 23,
//                 status: 'male',
//                 experience: 2
//             }
//         },
//         {
//             model: 'Sedan',
//             manufactureYear: 2015,
//             power: 250,
//             color: 'red',
//             chauffeur: {
//                 name: 'Olya',
//                 age: 22,
//                 status: 'female',
//                 experience: 1
//             }
//         },
//         {
//             model: 'Ford Mustang',
//             manufactureYear: 2017,
//             power: 270,
//             color: 'silver',
//             chauffeur: {
//                 name: 'Diana',
//                 age: 23,
//                 status: 'female',
//                 experience: 4
//             }
//         }
//     ]
// );
// function cars([...x], someId) {
//     const array = [...x];
//     const mainDiv = document.getElementById(someId);
//     for (let i = 0; i < array.length; i++) {
//         const car = document.createElement('div');
//         const element = array[i];
//         car.innerText = `${element.model} ${element.manufactureYear}`;
//         mainDiv.appendChild(car);
//     }
// }
// cars(carsArray, 'some');
//
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function carsArr([...x], someId){
//     let array = [...x];
//     const getId = document.getElementById(someId);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let carDiv = document.createElement('div');
//         getId.appendChild(carDiv);
//         let modelDiv = document.createElement('div');
//         modelDiv.innerText = `${element.model}`;
//         carDiv.appendChild(modelDiv);
//         let manufactureYearDiv = document.createElement('div');
//         manufactureYearDiv.innerText = `${element.manufactureYear}`;
//         carDiv.appendChild(manufactureYearDiv);
//         let powerDiv = document.createElement('div');
//         powerDiv.innerText = `${element.power}`;
//         carDiv.appendChild(powerDiv);
//         let colorDiv = document.createElement('div');
//         colorDiv.innerText = `${element.color}`;
//         carDiv.appendChild(colorDiv);
//         let chauffeurDiv = document.createElement('div');
//         carDiv.appendChild(chauffeurDiv);
//         let nameDiv = document.createElement('div');
//         nameDiv.innerText = `${element.chauffeur.name}`;
//         chauffeurDiv.appendChild(nameDiv);
//         let ageDiv = document.createElement('div');
//         ageDiv.innerText = `${element.chauffeur.age}`;
//         chauffeurDiv.appendChild(ageDiv);
//         let statusDiv = document.createElement('div');
//         statusDiv.innerText = `${element.chauffeur.status}`;
//         chauffeurDiv.appendChild(statusDiv);
//         let experienceDiv = document.createElement('div');
//         experienceDiv.innerText = `${element.chauffeur.experience}`;
//         chauffeurDiv.appendChild(experienceDiv);
//     }
// }
// carsArr(carsArray, 'some');
//
// **- функція приймає 2 масиви з рівною кількістю об'єктів 
// та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// function union([...x], [...y]) {
//     let users = [...x];
//     let cities = [...y];
//     for (const user of users) {
//         for (const city of cities) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     console.log(users);
// }
// union(
//     [{
//         id: 1,
//         name: 'vasya',
//         age: 31,
//         status: false
//     }, {
//         id: 2,
//         name: 'petya',
//         age: 30,
//         status: true
//     }, {
//         id: 3,
//         name: 'kolya',
//         age: 29,
//         status: true
//     }, {
//         id: 4,
//         name: 'olya',
//         age: 28,
//         status: false
//     }],
//     [{
//         user_id: 3,
//         country: 'USA',
//         city: 'Portland'
//     }, {
//         user_id: 1,
//         country: 'Ukraine',
//         city: 'Ternopil'
//     }, {
//         user_id: 2,
//         country: 'Poland',
//         city: 'Krakow'
//     }, {
//         user_id: 4,
//         country: 'USA',
//         city: 'Miami'
//     }]
// );
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// function rules([...x]) {
//     let array = [...x];
//     const div = document.createElement('div');
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const divRule = document.createElement('div');
//         const num = document.createElement('div');
//         num.innerText = `${i + 1}`;
//         divRule.appendChild(num);
//         div.appendChild(divRule);
//         const divTitle = document.createElement('div');
//         divTitle.innerText = element.title;
//         divRule.appendChild(divTitle);
//         const divBody = document.createElement('div');
//         divBody.innerText = element.body;                                 
//         divRule.appendChild(divBody);                                      
//     }
//     document.body.appendChild(div);
// }

// rules(
//     [{
//             title: 'Первое правило Бойцовского клуба.',
//             body: 'Никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Второе правило Бойцовского клуба.',
//             body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Третье правило Бойцовского клуба.',
//             body: 'В схватке участвуют только двое.'
//         },
//         {
//             title: 'Четвертое правило Бойцовского клуба.',
//             body: 'Не более одного поединка за один раз.'
//         },
//         {
//             title: 'Пятое правило Бойцовского клуба.',
//             body: 'Бойцы сражаются без обуви и голые по пояс.'
//         },
//         {
//             title: 'Шестое правило Бойцовского клуба.',
//             body: 'Поединок продолжается столько, сколько потребуется.'
//         },
//         {
//             title: 'Седьмое правило Бойцовского клуба.',
//             body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         },
//         {
//             title: 'Восьмое и последнее правило Бойцовского клуба.',
//             body: 'Новичок обязан принять бой.'
//         },

//     ]
// );
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// function two(n) {
//     let res = n / 2;
//     if (res == 1) {
//         console.log('yes');
//     } else {                      
//         if (res < 2) {
//             console.log('no');
//         }
//         two(res);                            
//     }
// }
// two(8);
//
//
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// function copy() {
//     let native = {
//         name: 'Ilona',
//         age: 23,
//         address: {
//             city: 'Lviv',
//             street: 'Naykova'                                                 
//         }
//     }
//     let copied = {};
//     for (const key in native) {
//         if (Object.hasOwnProperty.call(native, key)) {
//             copied[key] = native[key];
//         }
//     }
//     console.log(copied);
//     copy(copied);
//     }
// copy();
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// function flat([...x]) {
// const array = [...x];
// const res = [];
// while(array.length){
//     const next = array.pop();
//     if (Array.isArray(next)){
//         array.push(...next)                                                      ТРОХИ ПОЯСНИТИ
//     } else {
//         res.push(next);
//     }
// }
// return res.reverse();
// }
// console.log(flat([1, 3, ['Hello', 'Wordd', [9, 6, 1]],['oops'], 9]));