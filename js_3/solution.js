// -создать 5 объектов.В каждом объекте не менее 3 х полей.Все объекты разные по набору полей.
//(Т.е поле name должно присутствовать только 1 раз в одном объекте)
// let person1 = {
//     name: 'Ira',
//     age: 23,
//     status: 'female'
// };
// let dog = {
//     call: 'Tuzik',
//     howOld: 4,
//     breed: 'dalmantunets'
// };
// let tree = {
//     color: 'green',
//     height: 3,
//     width: 0.5
// };
// let build = {
//     arePeopleLive: true,
//     floors: 9,
//     sumOfPeople: 100
// };
// let country = {
//     nameOfCountry: 'Ukraine',
//     capital: 'Kyiv',
//     currentCity: 'Lviv'
// };
//
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт...
//  Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let bag = {
//     color: 'black',
//     staffInside: ['lipstick', 'maskara'],
//     owner: {
//         name: 'Khrystyna'
//     }
// };
// let dogg = {
//     name: 'Barsik',
//     furColor: ['white', 'black'],
//     owners: {
//         name: ['Katya', 'Viktor']
//     }
// };
// let laptop = {
//     brand: 'hp',
//     browsers : ['chrome', 'mozila'],
//     isKeyboardBacklit: true
// };
// let blouse = {
//     size: 's',
//     owner: {
//         name: 'Vika'
//     },
//     features: ['collar', 'pocket']
// };
// let shoppingCenter = {
//     location: 'center of the city',
//     shops: ['Zara', 'H&M', 'Mango'],
//     favouriteConsumer: {
//         firstName: 'Anya'
//     }
// };
//
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const key in person1) {
//     console.log(key);
// }
// for (const key1 in dog) {
//    console.log(dog);
// }
// for (const key2 in tree) {
//    console.log(key2)
// }
// for (const key3 in build) {
//     console.log(key3);
// }
// for (const key4 in country) {
//     console.log(key4);
// }
// for (const key5 in bag) {
//     console.log(key5);
// }
// for (const key6 in dogg) {
//     console.log(key6);
// }
// for (const key7 in laptop) {
//    console.log(key7);
// }
// for (const key8 in blouse) {
//     console.log(key8);
// }
// for (const key9 in shoppingCenter) {
//     console.log(key9);
// }
//
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(person1));
// console.log(Object.keys(dog));
// console.log(Object.keys(tree));
// console.log(Object.keys(build));
// console.log(Object.keys(country));
// console.log(Object.keys(bag));
// console.log(Object.keys(dogg));
// console.log(Object.keys(laptop));
// console.log(Object.keys(blouse));
// console.log(Object.keys(shoppingCenter));
//
//- Создать массив из 10 объектов cars и заполнить
// его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     car1 = {
//         model: 'Mercedes-Benz',
//         manufactureYear: 2019,
//         power: 300,
//         color: 'black'
//     },
//     car2 = {
//         model: 'Sedan',
//         manufactureYear: 2015,
//         power: 250,
//         color: 'red'
//     },
//     car3 = {
//         model: 'Ford Mustang',
//         manufactureYear: 2017,
//         power: 270,
//         color: 'silver'
//     },
//     car4 = {
//         model: 'Audi',
//         manufactureYear: 2018,
//         power: 280,
//         color: 'black'
//     },
//     car5 = {
//         model: 'Hyundai',
//         manufactureYear: 2016,
//         power: 240,
//         color: 'green'
//     },
//     car6 = {
//         model: 'Honda',
//         manufactureYear: 2018,
//         power: 260,
//         color: 'white'
//     },
//     car7 = {
//         model: 'Skoda',
//         manufactureYear: 2014,
//         power: 230,
//         color: 'yellow'
//     },
//     car8 = {
//         model: 'Land Rover',
//         manufactureYear: 2019,
//         power: 290,
//         color: 'white'
//     },
//     car9 = {
//         model: 'Suzuki',
//         manufactureYear: 2020,
//         power: 310, 
//         color: 'black'
//     },
//     car10 = {
//         model: 'Volkswagen',
//         manufactureYear: 2019,
//         power: 290,
//         color: 'red'
//     }
// ]
//
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
// (Значаения полей могу быть выдуманными)
// let cities = [
//     firstCity = {
//         name: 'London',
//         population: '8.982 million',
//         country: 'UK',
//         region: 'London'
//     },
//     secondCity = {
//         name: 'Berlin',
//         population: '3.645 million',
//         country: 'Germany',
//         region: 'Northern European Lowlands'
//     }
// ]
//
//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carss = [
//     car1 = {
//         model: 'Mercedes-Benz',
//         manufactureYear: 2019,
//         power: 300,
//         color: 'black',
//         chauffeur: {
//             name: 'Oleh',
//             age: 23,
//             status: 'male',
//             experience: 2
//         }
//     },
//     car2 = {
//         model: 'Sedan',
//         manufactureYear: 2015,
//         power: 250,
//         color: 'red',
//         chauffeur: {
//             name: 'Olya',
//             age: 22,
//             status: 'female',
//             experience: 1
//         }
//     },
//     car3 = {
//         model: 'Ford Mustang',
//         manufactureYear: 2017,
//         power: 270,
//         color: 'silver',
//         chauffeur: {
//             name: 'Diana',
//             age: 23,
//             status: 'female',
//             experience: 4
//         }
//     }
// ]
//
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i < cars.length){
//     console.log(cars[i]);
//     i++;
// // }
// let j = 0;
// while(j < cities.length){
//     console.log(cities[j]);
//     j++;
// }
// let k = 0;
// while(k < carss.length){
//     console.log(carss[k]);
//     k++;
// }
//- проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < carss.length; i++) {
//     console.log(carss[i]);
// }
//
//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const iterator of cars) {
//     console.log(iterator);
// }
// for (const iterator of cities) {
//     console.log(iterator);
// }
// for (const iterator of carss) {
//     console.log(iterator);
// }
//
//- взять объекты из задания 1 и превратить каждый в json.
// let jsonPerson1 = JSON.stringify(person1);
// console.log(jsonPerson1);
// let jsonDog = JSON.stringify(dog);
// console.log(jsonDog);
// let jsonTree = JSON.stringify(tree);
// console.log(jsonTree);
// let jsonBuild = JSON.stringify(build);
// console.log(jsonBuild);
// let jsonCountry = JSON.stringify(country);
// console.log(jsonCountry);
//
//- взять json из задания 11 и превратить их обратно в объекты.
// let per = JSON.parse(jsonPerson1);
// console.log(per);
// let newDog = JSON.parse(jsonDog);
// console.log(newDog);
// let newTree = JSON.parse(jsonTree);
// console.log(newTree);
// let newBuild = JSON.parse(jsonBuild);
// console.log(newBuild);
// let newCountry = JSON.parse(jsonCountry);
// console.log(newCountry);
//
//- взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const iterator of cars) {
//     let jsonCars = JSON.stringify(iterator);
//     console.log(jsonCars);
// }
//
//- взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const iterator of cities) {
//     let jsonCities = JSON.stringify(iterator);
//     console.log(jsonCities);
// }
//
//- взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// for (const iterator of carss) {
//     let jsonCarss = JSON.stringify(iterator);
//     console.log(jsonCarss);
// }
//
//       NEW 
//
//
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     user1 = {
//         name: 'Ira',
//         skills: ['java', 'js']
//     },
//     user2 = {
//         name: 'Igor',
//         skills: ['python', 'js']
//     },
//     user3 = {
//         name: 'Ilona',
//         skills: ['react', 'js']
//     }
// ]
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].skills);
// }
//
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//  Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
//  Скопировать все skills всех пользователей в отедльный массив
// let users = [
//     user1 = {
//         name: 'Ira',
//         age: 20,
//         skills: ['java', 'js']
//     },
//     user2 = {
//         name: 'Igor',
//         age: 23,
//         skills: ['python', 'js']
//     },
//     user3 = {
//         name: 'Ilona',
//         age: 27,
//         skills: ['react', 'js']
//     }
// ]
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
// let newSkills = [];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].skills);
//     newSkills = users[i].skills;
//     console.log(newSkills);
// }
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         skills: ['java', 'js']
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         skills: ['java', 'js', 'html']
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         skills: ['mysql', ',mongo']
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         skills: ['java', 'js']
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         skills: ['mysql', ',mongo']
//     }
// ];
// for (const iterator of users) {
//     console.log(iterator);
//     for (const skill of iterator.skills) {
//         console.log(skill);
//     }                                                    або
// }
// for (const sk of users) {
//     console.log(sk.skills);
// }
//
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Lviv',
//         country: 'Ukraine',
//         street: 'Shevchenko',
//         houseNumber: 1
//     }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {
//         city: 'New York',
//         country: 'USA',
//         street: 'East str',
//         houseNumber: 21
//     }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Budapest',
//         country: 'Hungary',
//         street: 'Kuraku',
//         houseNumber: 78
//     }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Prague',
//         country: 'Czech',
//         street: 'Paster',
//         houseNumber: 56
//     }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Istanbul',
//         country: 'Turkey',
//         street: 'Mikar',
//         houseNumber: 39
//     }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Rio',
//         country: 'Brasil',
//         street: 'Ronaldi',
//         houseNumber: 5
//     }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {
//         city: 'Montreal',
//         country: 'Canada',
//         street: 'Acusto',
//         houseNumber: 90
//     }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {
//         city: 'Quebeck',
//         country: 'Canada',
//         street: 'Binaro',
//         houseNumber: 33
//     }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {
//         city: 'Moscow',
//         country: 'Russia',
//         street: 'Gogolia',
//         houseNumber: 1
//     }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {
//         city: 'Portland',
//         country: 'USA',
//         street: 'Forest str',
//         houseNumber: 4
//     }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {
//         city: 'Cairo',
//         country: 'Egypt',
//         street: 'Seashore',
//         houseNumber: 45
//     }
// }];
// let usersAddress = [];
// for (const value of users) {
//     usersAddress = value.address;
//     console.log(usersAddress);
// }
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці. 
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div');
//     div.innerText = `${user.name} ${user.age} ${user.status}
//      ${user.address.city} ${user.address.country}
//       ${user.address.street} ${user.address.houseNumber}`; 
//     document.body.appendChild(div);
// }
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div = document.createElement('div');
//     let divName = document.createElement('div');
//     let divAge = document.createElement('div');
//     let divStatus = document.createElement('div');
//     let divAddress = document.createElement('div');

//     divName.innerText = `${user.name}`;
//     div.appendChild(divName);
//     divAge.innerText  = `${user.age}`;
//     div.appendChild(divAge);
//     divStatus.innerText = `${user.status}`;
//     div.appendChild(divStatus);
//     divAddress.innerText = `${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
//     div.appendChild(divAddress);
//     document.body.appendChild(div);
// }
//
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let div  = document.createElement('div');
//     let divName = document.createElement('div');
//     let divAge = document.createElement('div');
//     let divStatus = document.createElement('div');
//     let divAddress = document.createElement('div');
//     let divAddressCity = document.createElement('div');
//     let divAddressCountry = document.createElement('div');
//     let divAddressStreet = document.createElement('div');
//     let divAddressHouseNumber = document.createElement('div');

//     divName.innerText = `${user.name}`;
//     div.appendChild(divName);
//     divAge.innerText = `${user.age}`;
//     div.appendChild(divAge);
//     divStatus.innerText = `${user.status}`;
//     div.appendChild(divStatus);
//
// divAddress.innerText = `${user.address}`;                  [object Object] -вивід.  як правильно зробити?  
//
//     div.appendChild(divAddress);
//     divAddressCity.innerText = `${user.address.city}`;
//     divAddress.appendChild(divAddressCity);
//     divAddressCountry.innerText = `${user.address.country}`;
//     divAddress.appendChild(divAddressCountry);
//     divAddressStreet.innerText = `${user.address.street}`;
//     divAddress.appendChild(divAddressStreet);
//     divAddressHouseNumber.innerText = `${user.address.houseNumber}`;
//     divAddress.appendChild(divAddressHouseNumber);
//     document.body.appendChild(div);
// }
//
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false
// }, {
//     id: 2,
//     name: 'petya',
//     age: 30,
//     status: true
// }, {
//     id: 3,
//     name: 'kolya',
//     age: 29,
//     status: true
// }, {
//     id: 4,
//     name: 'olya',
//     age: 28,
//     status: false
// }, ];

// let citiesWithId = [{
//     user_id: 3,
//     country: 'USA',
//     city: 'Portland'
// }, {
//     user_id: 1,
//     country: 'Ukraine',
//     city: 'Ternopil'
// }, {
//     user_id: 2,
//     country: 'Poland',
//     city: 'Krakow'
// }, {
//     user_id: 4,
//     country: 'USA',
//     city: 'Miami'
// }, ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//         user_id: 1,
//         country: 'Ukraine',
//         city: 'Ternopil'
//     }
// }....]
// let usersWithCities = [];
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if(user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId);
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);
//
//- створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу
// const zzz = document.querySelector('#id');
// const text = zzz.textContent;                                     по ід також витягує
// console.log(text);

// const byId = document.getElementById('id');
// const text = byId.innerText;
// console.log(text);

// const byClass = document.getElementsByClassName('class');
// for (const iterator of byClass) {
//     console.log(iterator);
// }

// const byTag = document.getElementsByTagName('p');
// console.log(byTag);
//
//- змінити цей текст використовуючи селектори id, class,  tag
// const byId = document.getElementById('id');
// byId.innerText = 'aaaaaaaaa';

// const byClass = document.getElementsByClassName('class');
// for (const iterator of byClass) {
//     iterator.innerHTML = 'aaaaa'
// }
// const byTag = document.getElementsByTagName('p');
// for (const iterator of byTag) {
//     iterator.innerText = 'text';
// }
//
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// const byId = document.getElementById('id');
// byId.style.height = '500px';
// byId.style.width = '10%';

// const byClass = document.getElementsByClassName('class');
// for (let i = 0; i < byClass.length; i++) {
//     byClass[i].style.width = '100px';
//     byClass[i].style.height = '20%';
// }

// const byTag = document.getElementsByTagName('p');
// for (const iterator of byTag) {
//     iterator.style.width = '300px';
//     iterator.style.height = '200px';
// }
//                        
//
//                                               UPDATED
//
//
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table = document.createElement('table');
// const tr = document.createElement('tr');
// table.appendChild(tr);    
// tr.style.border = '1px solid black';                 
// for (let i = 0; i < 3; i++) {
// const td = document.createElement('td');
// tr.appendChild(td);
// td.style.border = '1px solid black';
// td.style.height = '200px';
// td.style.width = '300px';
// }
// document.body.appendChild(table);
//
//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < 3; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//         td.style.border = '1px solid black';
//         td.style.height = '100px';
//         td.style.width = '200px';
//     }
// }
// document.body.appendChild(table);
//
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let j = 0; j < 5; j++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//         td.style.border = '1px solid black';
//         td.style.width = '300px';
//         td.style.height = '50px';
//     }
// }
// document.body.appendChild(table);
//
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
// let n = +prompt('Input a number');
// let m = +prompt('Input another number');
// const table = document.createElement('table');
// for (let i = 0; i < n; i++) {
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (let i = 0; i < m; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//         td.style.border = '1px solid black';
//         td.style.width = '200px';
//         td.style.height = '50px';
//     }
// }
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. 
//У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний
// const byClass = document.getElementsByClassName('line-h');          
// for (const iterator of byClass) {
//     console.log(iterator);                                        
// }
// const byClass = document.getElementsByClassName('bord');
// for (const iterator of byClass) {
//     console.log(iterator);
// }
//
//- знайти всі параграфи ,та змінити текст на hello oktenweb!
// const text = 'hello oktenweb';
// const byTag = document.getElementsByTagName('p');
// for (const iterator of byTag) {
//     iterator.innerText = text;
// }
//
//- знайти всі div та змінити ім колір на червоний
// const byTag = document.getElementsByTagName('div');
// for (const iterator of byTag) {
//     iterator.style.background = 'red';
// }
//
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(respons => respons.json())
//     .then(users => {
//         const mainDiv = document.createElement('div');
//         for (const user of users) {
//             console.log(user);
//             const div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name} ${user.username} ${user.email} ${user.phone} ${user.website}`
//             mainDiv.appendChild(div);
//             const divAddress = document.createElement('div');
//             divAddress.innerText = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
//             div.appendChild(divAddress);
//             const divGeo = document.createElement('div');
//             divGeo.innerText = `${user.address.geo.lat} ${user.address.geo.lng}`;
//             divAddress.appendChild(divGeo);
//             const divCompany = document.createElement('div');
//             divCompany.innerText = `${user.company.name} ${user.company.catchPhrase} ${user.company.bs}`
//         }

//         document.body.appendChild(mainDiv);
//     });
//
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(respons => respons.json())
// .then(posts => {
//     const div = document.createElement('div');
//     for (const post of posts) {
//         const divUserId = document.createElement('div');
//         divUserId.innerText = `${post.userId}`;
//         div.appendChild(divUserId);
//         const divId = document.createElement('div');
//         divId.innerText = `${post.id}`;
//         div.appendChild(divId);
//         const divTitle = document.createElement('div');
//         divTitle.innerText = `${post.title}`;
//         div.appendChild(divTitle);
//         const divBody = document.createElement('div');
//         divBody.innerText = `${post.body}`;
//         div.appendChild(divBody);
//     }
//     document.body.appendChild(div);
// });
//
//*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(respons => respons.json())
// .then(comments => {
//     const div = document.createElement('div');
//     for (const comment of comments) {
//         const divPostId = document.createElement('div');
//         divPostId.innerText = `${comment.postId}`;
//         div.appendChild(divPostId);
//         const divId = document.createElement('div');
//         divId.innerText = `${comment.id}`;
//         div.appendChild(divId);
//         const divName = document.createElement('div');
//         divName.innerText = `${comment.name}`;
//         div.appendChild(divName);
//         const divEmail = document.createElement('div');
//         divEmail.innerText = `${comment.email}`;
//         div.appendChild(divEmail);
//         const divBody = document.createElement('div');
//         divBody.innerText = `${comment.body}`;
//         div.appendChild(divBody);
//     }
//     document.body.appendChild(div);
// });
//
//****** при помощи fetch (как в примере) получить от jsonplaceholder все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(respons => respons.json())
//     .then(posts => {
//         fetch("https://jsonplaceholder.typicode.com/comments")
//             .then(resp => resp.json())
//             .then(comments => {
//                 const div = document.createElement('div');
//                 for (const post of posts) {
//                     for (const comment of comments) {
//                         if (post.id === comment.postId) {
//                             const divUserId = document.createElement('div');
//                             divUserId.innerText = `${post.userId}`;
//                             div.appendChild(divUserId);
//                             const divPostId = document.createElement('div');
//                             divPostId.innerText = `${post.id} ${comment.postId} ${comment.id} ${comment.name} ${comment.email} ${comment.body}`;
//                             div.appendChild(divPostId);
//                             const divTitle = document.createElement('div');
//                             divTitle.innerText = `${post.title}`;
//                             div.appendChild(divTitle);
//                             const divBody = document.createElement('div');
//                             divBody.innerText = `${post.body}`;
//                             div.appendChild(divBody);
//                         }
//                     }
//                 }
//                 document.body.appendChild(div);
//             });
//     });
//

