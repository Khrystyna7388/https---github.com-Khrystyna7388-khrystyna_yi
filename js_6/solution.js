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
// array.map(number => number*3).forEach(number => console.log(number));
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
let users = [{
    name: 'vasya',
    age: 31,
    status: false
}, {
    name: 'petya',
    age: 30,
    status: true
}, {
    name: 'kolya',
    age: 29,
    status: true
}, {
    name: 'olya',
    age: 28,
    status: false
}, {
    name: 'max',
    age: 30,
    status: true
}, {
    name: 'anya',
    age: 31,
    status: false
}, {
    name: 'oleg',
    age: 28,
    status: false
}, {
    name: 'andrey',
    age: 29,
    status: true
}, {
    name: 'masha',
    age: 30,
    status: true
}, {
    name: 'olya',
    age: 31,
    status: false
}, {
    name: 'max',
    age: 31,
    status: true
}];
// users.sort((a, b) => a.age - b.age).forEach(user => console.log(user));
// users.sort((a, b) => b.age - a.age).forEach(user => console.log(user));
//
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => a.name.length - b.name.length).forEach(user => console.log(user));
// users.sort((a, b) => b.name.length - a.name.length).forEach(user => console.log(user));
//
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

