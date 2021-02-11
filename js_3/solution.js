// -создать 5 объектов.В каждом объекте не менее 3 х полей.Все объекты разные по набору полей.
//(Т.е поле name должно присутствовать только 1 раз в одном объекте)
let person1 = {
    name: 'Ira',
    age: 23,
    status: 'female'
};
let dog = {
    call: 'Tuzik', 
    howOld: 4,
    breed: 'dalmantunets'
};
let tree = {
    color: 'green',
    height: 3,
    width: 0.5
};
let build = {
    arePeopleLive: true, 
    floors: 9,
    sumOfPeople: 100
};
let country = {
    nameOfCountry: 'Ukraine',
    capital: 'Kyiv',
    currentCity: 'Lviv'
};
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
