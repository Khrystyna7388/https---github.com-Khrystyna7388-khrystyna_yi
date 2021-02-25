// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tags(titleOfTag, action, attrs = [{
//         tittleOfAttr,
//         actionOfAttr
//     }
// ]) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }

// console.log(new Tags('a', 'предназначен для создания ссылок', [{
//         tittleOfAttr: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//     },
//     {
//         tittleOfAttr: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области'
//     }, {
//         tittleOfAttr: 'download',
//         actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
//     }
// ]));
// //
// console.log(new Tags('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [{
//             tittleOfAttr: 'align',
//             actionOfAttr: 'Задает выравнивание содержимого тега <div>',
//         },
//         {
//             tittleOfAttr: 'title',
//             actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//         }
//     ]));
// //
// console.log(new Tags('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     [{
//         tittleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     }]));
// //
// console.log(new Tags('span', 'предназначен для определения строчных элементов документа',
//     [{
//             tittleOfAttr: 'class',
//             actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//         },
//         {
//             tittleOfAttr: 'contenteditable',
//             actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
//         }
//     ]));
// //
// console.log(new Tags('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{
//             tittleOfAttr: 'checked',
//             actionOfAttr: 'Предварительно активированный переключатель или флажок'
//         },
//         {
//             tittleOfAttr: 'formaction',
//             actionOfAttr: 'Определяет адрес обработчика формы.'
//         }
//     ]
// ));
// //
// console.log(new Tags('form', 'устанавливает форму на веб-странице',
//     [{
//             tittleOfAttr: 'name',
//             actionOfAttr: 'Имя формы'
//         },
//         {
//             tittleOfAttr: 'novalidate',
//             actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода'
//         }
//     ]));
// //
// console.log(new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     [{
//             tittleOfAttr: 'disabled',
//             actionOfAttr: 'Заблокировать для доступа элемент списка.'
//         },
//         {
//             tittleOfAttr: 'label',
//             actionOfAttr: 'Указание метки пункта списка.'
//         }
//     ]
// ));
// //
// console.log(new Tags('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка',
// [
//     {
//         tittleOfAttr: 'multiple',
//         actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
//     },
//     {
//         tittleOfAttr: 'size',
//         actionOfAttr: 'Количество отображаемых строк списка.'
//     }
// ]));
//
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// class Tags {
//     constructor(titleOfTag, action, attrs = [{
//         tittleOfAttr,
//         actionOfAttr
//     }]) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// };

// console.log(new Tags('a', 'предназначен для создания ссылок', [{
//         tittleOfAttr: 'accesskey',
//         actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
//     },
//     {
//         tittleOfAttr: 'coords',
//         actionOfAttr: 'Устанавливает координаты активной области'
//     }, {
//         tittleOfAttr: 'download',
//         actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
//     }
// ]));
//
// console.log(new Tags('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [{
//             tittleOfAttr: 'align',
//             actionOfAttr: 'Задает выравнивание содержимого тега <div>',
//         },
//         {
//             tittleOfAttr: 'title',
//             actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//         }
//     ]));
// console.log(new Tags('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     [{
//         tittleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     }]));
// console.log(new Tags('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     [{
//         tittleOfAttr: 'align',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     }]));
// console.log(new Tags('span', 'предназначен для определения строчных элементов документа',
//     [{
//             tittleOfAttr: 'class',
//             actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
//         },
//         {
//             tittleOfAttr: 'contenteditable',
//             actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
//         }
//     ]));
// console.log(new Tags('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{
//             tittleOfAttr: 'checked',
//             actionOfAttr: 'Предварительно активированный переключатель или флажок'
//         },
//         {
//             tittleOfAttr: 'formaction',
//             actionOfAttr: 'Определяет адрес обработчика формы.'
//         }
//     ]));
// console.log(new Tags('form', 'устанавливает форму на веб-странице',
//     [{
//             tittleOfAttr: 'name',
//             actionOfAttr: 'Имя формы'
//         },
//         {
//             tittleOfAttr: 'novalidate',
//             actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода'
//         }
//     ]));
// console.log(new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     [{
//             tittleOfAttr: 'disabled',
//             actionOfAttr: 'Заблокировать для доступа элемент списка.'
//         },
//         {
//             tittleOfAttr: 'label',
//             actionOfAttr: 'Указание метки пункта списка.'
//         }
//     ]));
// console.log(new Tags('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     [{
//             tittleOfAttr: 'multiple',
//             actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
//         },
//         {
//             tittleOfAttr: 'size',
//             actionOfAttr: 'Количество отображаемых строк списка.'
//         }
//     ]));
//
// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// const car = {
//     model: 'Ferrari F40',
//     maker: 'Maranello, Italy',
//     yearOfOutput: 1987,
//     maxSpeed: 321,
//     engineCapasity: '2,936 cc'
// }

// function drive() {
//     console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
// }
// drive();

// function info() {
//     console.log(`модель - ${car.model}, виробник - ${car.maker}, рік випуску - ${car.yearOfOutput}, 
//      максимальна швидкість - ${car.maxSpeed}, об'єм двигуна - ${car.engineCapasity}`);
// }
// info();

// function increaseMaxSpeed(newSpeed) {
//     car.maxSpeed = newSpeed;
//     console.log(`new max speed = ${car.maxSpeed}`);
// }
// increaseMaxSpeed(500);

// function changeYear(newValue) {
//     car.yearOfOutput = newValue;
//     console.log(`змінений рік випуску ${car.yearOfOutput}`);
// }
// changeYear(1999);

// function addDriver(driverName, driverAge) {
//     car.driver = {
//         name: driverName,
//         age: driverAge
//     }
// }
// addDriver('Khrystyna', 22);
// console.log(car);
//
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, maker, yearOfOutput, maxSpeed, engineCapasity) {
//     this.model = model;
//     this.maker = maker;
//     this.yearOfOutput = yearOfOutput;
//     this.maxSpeed = maxSpeed;
//     this.engineCapasity = engineCapasity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`модель - ${this.model}, виробник - ${this.maker}, рік випуску - ${this.yearOfOutput}, 
//         максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapasity}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(`new max speed = ${this.maxSpeed}`);
//     }
//     this.changeYear = function (newValue) {
//         this.yearOfOutput = newValue;
//         console.log(`змінений рік випуску ${this.yearOfOutput}`);
//     }
//     this.addDriver = function (driverName, driverAge) {
//         this.driver = {
//             name: driverName,
//             age: driverAge
//         }
//     }
// };

// const ferrariCar = new Car('Ferrari F40', 'Maranello, Italy', 1987, 321, '2,936 cc');
// ferrariCar.drive();
// ferrariCar.info();
// ferrariCar.increaseMaxSpeed(450);
// ferrariCar.changeYear(1995);
// ferrariCar.addDriver('Ira', 22);
// console.log(ferrariCar);
//
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model, maker, yearOfOutput, maxSpeed, engineCapasity) {
//         this.model = model;
//         this.maker = maker;
//         this.yearOfOutput = yearOfOutput;
//         this.maxSpeed = maxSpeed;
//         this.engineCapasity = engineCapasity;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info() {
//         console.log(`модель - ${this.model}, виробник - ${this.maker}, рік випуску - ${this.yearOfOutput}, 
//         максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapasity}`);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(`new max speed = ${this.maxSpeed}`);
//     }
//     changeYear(newValue) {
//         this.yearOfOutput = newValue;
//         console.log(`змінений рік випуску ${this.yearOfOutput}`);
//     }
//     addDriver(driverName, driverAge){
//        this.driver = {
//            name: driverName,
//            age: driverAge
//        }
//     }

// }

// const ferrariCar = new Car('Ferrari F40', 'Maranello, Italy', 1987, 321, '2,936 cc');
// ferrariCar.drive();
// ferrariCar.info();
// ferrariCar.increaseMaxSpeed(400);
// ferrariCar.changeYear(1999);
// ferrariCar.addDriver('Olya', 22);
// console.log(ferrariCar);
//
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella{
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince{
//     constructor(princeName, princeAge, shoe){
//         this.princeName = princeName;
//         this.princeAge = princeAge;
//         this.shoe = shoe;
//     }
// }
// const girls = [
//     new Cinderella('Sabrina', 22, 37),
//     new Cinderella('Ira', 21, 38),
//     new Cinderella('Katya', 26, 36),
//     new Cinderella('Vika', 18, 38),
//     new Cinderella('Olena', 23, 37)
// ];
// const man = new Prince('Ivan', 27, 36);
// for (const iterator of girls) {
//     if(man.shoe == iterator.footSize){
//         console.log(iterator);
//     }
// }
//
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// const girls = [
//     new Cinderella('Sabrina', 22, 37),
//     new Cinderella('Ira', 21, 38),
//     new Cinderella('Katya', 26, 36),
//     new Cinderella('Vika', 18, 38),
//     new Cinderella('Olena', 23, 37)
// ];

// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;

//    this.search = function ([...x]) {
//         const list = [...x];
//         for (const iterator of list) {
//             if(this.shoe === iterator.footSize){
//                 console.log(iterator);
//             }
//         }
//     }
// }
// const man = new Prince('Igor', 28, 36);
// man.search(girls);
//
//
//
//
//
// Extends
// class People{
//     constructor(name, age, country, city){
//         this.name = name;
//         this.age =age;
//         this.country = country;
//         this.city = city;
//     }
//     introduction(){
//         console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. I am from ${this.country}, ${this.city}`)
//     }
// }
// class Woman extends People{
//     constructor(name, age, country, city, favouriteBook){
//         super(name, age, country, city);
//         this.favouriteBook = favouriteBook;
//     }
// }
// const firstWoman = new Woman('Ira', 23, 'Ukraine', 'Lviv', 'Sharlok Holmes');
// console.log(firstWoman);
// firstWoman.introduction();

// class Man extends People{
//     constructor(name, age, country, city, favouriteFootballTeam){
//         super(name, age, country, city);
//         this.favouriteFootballTeam = favouriteFootballTeam;
//     }
// }
// const firstMan = new Man('Oleh', 25, 'Ukraine', 'Kyiv', 'Karpatu');
// console.log(firstMan);
// firstMan.introduction();