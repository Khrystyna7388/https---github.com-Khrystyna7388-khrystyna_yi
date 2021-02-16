//-- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let dog = {
//     name: 'Barsik',
//     age: 2,
//     status: 'male',
//     color: 'black',
//     owner: {
//         name: 'Katya'
//     }
// };
// let person = {
//     name: 'Ira', 
//     age = 21,
//     residence: {
//         country: 'Ukraine',
//         city: 'Lviv',
//         street: 'Naukova'
//     }
// };
// let car = {
//     name: 'yamborghini',
//     color: 'white',
//     doors: 2,
//     power: 300,
//     speed: 300
// };
// let flat = {
//     rooms: 4,
//     isLivingRooom: true,
//     square: 150,
//     floor: 3,
//     bedrooms: 2
// };
// let book = {
//     name: 'Черчилль. Великие личности в истории',
//     author: 'Андрей Галушка',
//     pages: 352,
//     illustration: 'black and white',
//     year: 2019
// };
//
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let dogs = ['Barsik', 'Marsik', 'Bobik', 'Alfred', 'Bob'];
// for (const iterator of dogs) {
//     console.log(iterator);
// }
// let people = [{
//         name: 'Ira',
//         age: 22
//     },
//     {
//         name: 'Olya',
//         age: 23
//     },
//     {
//         name: 'Olena',
//         age: 21
//     },
//     {
//         name: 'Igor',
//         age: 24
//     },
//     {
//         name: 'Oleh',
//         age: 22
//     }
// ]
// for (const iterator of people) {
//     console.log(iterator);
// }
//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// let house = {
//     square: 300,
//     owners: ['Katya', 'Igor'],
//     color: 'white',
//     pets: {
//         dog: 'Barsik',
//         cat: 'Mursik'
//     },
//     rooms: 6
// };
//
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// let users = [{
//         name: 'vasya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true
//     }
// ];
//
// console.log(users[7].status);

// for (const user of users) {
//     if(user.name === 'max'){
//         console.log(user.status);
//     }
// };

// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);

// for (const user of users) {
//     if(user.name === 'olya'){
//         console.log(user.age);
//     }
// };
// console.log('Name = ' + users[4].name + ' Age = ' + users[4].age);

// for (const user of users) {
//     if(user.name === 'anya'){
//         console.log(user.age, user.status);
//     } 
// };
//
//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// const byId = document.getElementById('content');
// const text = byId.innerText;
// console.log(text);
//
//- отримує текст з блоку з id "rules"
// const byId = document.getElementById('rules');
// const text = byId.innerText;
// console.log(text);
//
//- замініть текст параграфа з id 'content' на будь-який інший
// const byId = document.getElementById('content');
// byId.innerText = 'text';
//
//- замініть текст параграфа з id 'rules' на будь-який інший
// const byId = document.getElementById('rules');
// byId.innerText = 'text';
//
//- змініть кожному елементу колір фону на червоний
// const byTag = document.getElementsByName('body');
// for (const iterator of byTag) {             ---------------------------------------
//     iterator.style.background = 'red';
// }
// const byP = document.getElementsByTagName('p');
// for (const iterator of byP) {
//     iterator.style.background = 'red';
// }
// const byDiv = document.getElementsByTagName('div');
// for (const i of byDiv) {
//     i.style.background = 'red';
// }
// const byLi = document.getElementsByTagName('li');
// for (const iter of byLi) {
//     iter.style.background = 'red';
// }
//
//- змініть кожному елементу колір тексту на синій
// const byP = document.getElementsByTagName('p');
// for (const iterator of byP) {
//     iterator.style.background ='blue';
// }
// const byDiv = document.getElementsByTagName('div');
// for (const i of byDiv) {
//     i.style.background = 'blue';
// }
// const byLi = document.getElementsByTagName('li');
// for (const iter of byLi) {
//     iter.style.background = 'blue';
// }
//
//- отримати весь список класів елемента з id=rules і вивести їх в console.log