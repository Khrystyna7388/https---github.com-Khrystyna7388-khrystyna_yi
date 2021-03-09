// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// const array = [19, 300, 273, 4847, 2, -4, 27, 2.6, 2, 8, 75, 123, 67, 34, 21, 687, 374, -34, 9887, 0];
// const res = array.sort((a, b) => a - b);
// console.log(res);
//
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// const res = array.sort((a, b) => b - a);
// console.log(res);
//
// -- при помощи filter получить числа кратные 3
// const res = array.filter(number => number % 3 === 0);
// console.log(res);
//
// -- при помощи filter получить числа кратные 10
// const res = array.filter(number => number % 10 === 0);
// console.log(res);
//
// -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach(number => console.log(number));
//
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// array.map(number => number*3);
// console.log(array);
//
//
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// const array = ['zone', 'apple', 'oil', 'join', 'health', 'fun', 'soul', 'tree', 'black',
//     'sun', 'rain', 'glass', 'floor', 'bag', 'fix'
// ];
// array.sort((a, b) => a.localeCompare(b)).forEach(word => console.log(word));
//
// -- отсортировать его по алфавиту  в нисходящем порядке.
// array.sort((a, b) => b.localeCompare(a)).forEach(word => console.log(word));
//
// -- отфильтровать слова длиной менее 4х символов
// array.filter(word => word.length < 4).forEach(word => console.log(word));
//
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// array.map(word => word + '!').forEach(word => console.log(word));
//
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false},
// {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false},
// {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true},
// {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false},
// {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     name: 'olya',
//     age: 28,
//     status: false
// }, {
//     name: 'max',
//     age: 30,
//     status: true
// }, {
//     name: 'anya',
//     age: 31,
//     status: false
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true
// }, {
//     name: 'masha',
//     age: 30,
//     status: true
// }, {
//     name: 'olya',
//     age: 31,
//     status: false
// }, {
//     name: 'max',
//     age: 31,
//     status: true
// }];
// users.sort((a, b) => a.age - b.age).forEach(user => console.log(user));
// users.sort((a, b) => b.age - a.age).forEach(user => console.log(user));
//
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length).forEach(user => console.log(user));
// users.sort((a, b) => b.name.length - a.name.length).forEach(user => console.log(user));
//
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// users.forEach(user => Math.random() = user.id);
// users.map(user => user.id = Math.floor(Math.random() * 100) + 1);
// console.log(users);
// - відсортувати його за індентифікатором
// users.sort((a, b) => a.id - b.id).forEach(user => console.log(user));
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a, b, callback) {
//     return callback(a, b);
// }
// console.log(calculator(5, 6, (a, b) => a + b));
//
// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c, callback) {
//     return callback(a, b, c);
// }
// console.log(calculator(20, 61, 8, (a, b, c) => a * b / c));
//
// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// cars.filter(car => car.volume > 3).forEach(car => console.log(car));
//
// - двигун = 2л
// cars.filter(car => car.volume === 2).forEach(car => console.log(car));
//
// - виробник мерс
// cars.filter(car => car.producer === 'mercedes').forEach(user => console.log(user));
//
// - двигун більше 3х літрів + виробник мерседес
// console.log(cars.filter(car => car.volume > 3 && car.producer === 'mercedes'));
//
// - двигун більше 3х літрів + виробник субару
// console.log(cars.filter(car => car.volume >= 3 && car.producer === 'subaru'));
//
// - сили більше ніж 300
// console.log(cars.filter(car => car.power > 300));
//
// - сили більше ніж 300 + виробник субару
// console.log(cars.filter(car => car.power > 300 && car.producer === 'subaru'));
//
// - мотор серіі ej
// console.log(cars.filter(car => car.engine.includes('ej')));
//
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.includes('ej')));
//
// - двигун меньше 3х літрів + виробник мерсед
// console.log(cars.filter(car => car.volume >= 3 && car.producer === 'mercedes'));
//
// - двигун більше 2л + сили більше 250
// console.log(cars.filter(car => car.volume > 2 && car.power > 250));
//
// - сили більше 250  + виробник бмв
// console.log(cars.filter(car => car.power > 250 && car.producer === 'bmw'));
//
// let usersWithAddress = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'aShevchenko',
//         number: 16
//     }
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'vShevchenko',
//         number: 1
//     }
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'gShevchenko',
//         number: 121
//     }
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'lShevchenko',
//         number: 90
//     }
// }, {
//     id: 5,
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'zShevchenko',
//         number: 115
//     }
// }, {
//     id: 6,
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'oShevchenko',
//         number: 2
//     }
// }, {
//     id: 7,
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'qShevchenko',
//         number: 22
//     }
// }, {
//     id: 8,
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'lShevchenko',
//         number: 43
//     }
// }, {
//     id: 9,
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'mShevchenko',
//         number: 12
//     }
// }, {
//     id: 10,
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         street: 'xShevchenko',
//         number: 16
//     }
// }, {
//     id: 11,
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {
//         city: 'Lviv',
//         street: 'iShevchenko',
//         number: 121
//     }
// }];
//
// -- отсортировать его по id пользователей
// console.log(usersWithAddress.sort((a, b) => a.id - b.id));
//
// -- отсортировать его по id пользователей в обратном опрядке
// console.log(usersWithAddress.sort((a, b) => b.id - a.id));
//
// -- отсортировать его по возрасту пользователей
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));
//
// -- отсортировать его по возрасту пользователей в обратном порядке
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));
//
// -- отсортировать его по имени пользователей
// console.log(usersWithAddress.sort((a, b) => a.name.localeCompare(b.name)));
//
// -- отсортировать его по имени пользователей в обратном порядке
// console.log(usersWithAddress.sort((a, b) => b.name.localeCompare(a.name)));
//
// -- отсортировать его по названию улицы  в алфавитном порядке
// console.log(usersWithAddress.sort((a, b) => a.address.street.localeCompare(b.address.street)));
//
// -- отсортировать его по номеру дома по возрастанию
// console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));
//
// -- отфильтровать (оставить) тех кто младше 30
// console.log(usersWithAddress.filter(user => user.age < 30));
//
// -- отфильтровать (оставить) тех у кого отрицательный статус
// console.log(usersWithAddress.filter(user => !user.status));
//
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// console.log(usersWithAddress.filter(user => !user.status && user.age < 30));
//
// -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter(user => user.address.number%2 === 0));
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
//  та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв.
//  Якщо досвід водія менший за 5 років, але його вік більший за 25,
//   то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// const cars = [{
//         producer: "mercedes",
//         engine: 300,
//         price: 20000,
//         yearOFManufacture: 2019,
//         owner: {
//             name: 'Olya',
//             age: 22,
//             experience: 2
//         }
//     },
//     {
//         producer: 'bmw',
//         engine: 290,
//         price: 18000,
//         yearOFManufacture: 2017,
//         owner: {
//             name: 'Igor',
//             age: 25,
//             experience: 6
//         }
//     },
//     {
//         producer: 'tesla',
//         engine: 350,
//         price: 30000,
//         yearOFManufacture: 2021,
//         owner: {
//             name: 'Khrystyna',
//             age: 22,
//             experience: 3
//         }
//     },
//     {
//         producer: 'hyundai',
//         engine: 250,
//         price: 15000,
//         yearOFManufacture: 2016,
//         owner: {
//             name: 'Oleh',
//             age: 19,
//             experience: 0.8
//         }
//     },
//     {
//         producer: 'bmw',
//         engine: 260,
//         price: 18000,
//         yearOFManufacture: 2019,
//         owner: {
//             name: 'Maksym',
//             age: 24,
//             experience: 5
//         }
//     },
//     {
//         producer: 'volvo',
//         engine: 230,
//         price: 14000,
//         yearOFManufacture: 2015,
//         owner: {
//             name: 'Katya',
//             age: 26,
//             experience: 2
//         }
//     },
//     {
//         producer: 'mercedes',
//         engine: 270,
//         price: 17500,
//         yearOFManufacture: 2018,
//         owner: {
//             name: 'Ivanka',
//             age: 23,
//             experience: 3
//         }
//     },
//     {
//         producer: 'toyota',
//         engine: 260,
//         price: 17000,
//         yearOFManufacture: 2017,
//         owner: {
//             name: 'Ivan',
//             age: 27,
//             experience: 8
//         }
//     },
//     {
//         producer: 'ford',
//         engine: 230,
//         price: 12000,
//         yearOFManufacture: 2018,
//         owner: {
//             name: 'Olena',
//             age: 27,
//             experience: 2
//         }
//     }
// ]

// function engineFix([...carsArray]) {
//     for (let i = 0; i < carsArray.length; i += 2) {
//         carsArray[i].engine = (carsArray[i].engine * 0.1) + carsArray[i].engine;
//         carsArray[i].price = (carsArray[i].price * 0.05) + carsArray[i].price;
//     }
//     return carsArray;
// }
// console.log(engineFix(cars));

// cars.forEach(car => {
//     if (car.owner.experience < 5 && car.owner.age > 25) {
//         car.owner.experience += 1;
//     }
//     console.log(car);
// })

// const totalPrice = cars.reduce((sum, item) => sum + item.price, 0);
// console.log(totalPrice);
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
const array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
