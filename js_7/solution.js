// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// const text = document.getElementById('text');
// const button = document.getElementById('button');
// button.onclick = function () {
// if (text.style.display === 'block') {
//     text.style.display = 'none';
// } else {
//     text.style.display = 'block';
// }
// }
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.getElementById('button');
// button.onclick = function(){
//     button.style.display = 'none';
// }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
// та повідомити про це користувача
// const inputs = document.getElementsByTagName('input');
// const button = document.getElementById('button');
// button.onclick = function(){
//    for (const input of inputs) {
//        if(input.value < 18){
//            alert('wrong');
//        }
//    }
// }
//
// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu = document.getElementById('menu');
// const button = document.getElementById('button-menu');
// button.onclick = function (e) {
//     // const height = +getComputedStyle(menu).height.replace('px', '');
//     // menu.style.height = height / 2 + 'px';
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// const array = [
// {
//     tittle: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },
// {
//     tittle: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },
// {
//     tittle: 'lorem',
//     body: 'lorem ipsum dolo sit ameti',
// },
// {
//     tittle: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },
// {
//     tittle: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// }
// ]

// function listOfDocuments([...comments]){
//     const mainDiv = document.createElement('div');
//     for (const comment of comments) {
//         const div = document.createElement('div');
//         div.innerText = `${comment.tittle}`;
//         const divBody = document.createElement('div');
//         divBody.innerText = `${comment.body}`;
//         div.appendChild(divBody);
//         const button = document.createElement('button');
//         button.onclick = () =>{
//             if(divBody.style.display === 'block'){
//                 divBody.style.display = 'none';
//             }else{
//                 divBody.style.display = 'block'
//             }
//         }
//         div.appendChild(button);
//         mainDiv.appendChild(div);
//     }
//     document.body.appendChild(mainDiv);
// }
// listOfDocuments(array);
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// function getText(){
//     const input = document.getElementsByTagName('input');
//     for (const iterator of input) {
//         console.log(iterator.value);
//     }
// }
//
// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// function table(string, column, element) {
//     const main = document.createElement(element);
//     const table = document.createElement('table');
//     table.style.border = '1px solid black';
//     table.style.borderCollapse = 'collapse';
//     main.appendChild(table);
//     for (let i = 0; i < string; i++) {
//         const tr = document.createElement('tr');
//         tr.style.border = '1px solid black';
//         table.appendChild(tr);
//         for (let i = 0; i < column; i++) {
//             const td = document.createElement('td');
//             td.style.border = '1px solid black';
//             td.innerText = 'text';
//             table.appendChild(td);
//         }
//     }
//     document.body.appendChild(main);
// }
// table(5, 10, 'div');
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// const button = document.getElementsByTagName('button');
//
// button.onclick = () => {
//     // const string = document.getElementById('string');
//     // const column = document.getElementById('column');
//     // const text = document.getElementById('text');
//     const inputs = document.getElementsByTagName('input');
//     const string = inputs[0].value;
//     const column = inputs[1].value;
//     const text = inputs[2].value;
//     const table = document.createElement('table');
//     table.style.border = '1px solid black';
//     table.style.borderCollapse = 'collapse';
//     for (let i = 0; i < string; i++) {
//         const tr = document.createElement('tr');
//         tr.style.border = '1px solid black';
//         table.appendChild(tr);
//         for (let i = 0; i < column; i++) {
//             const td = document.createElement('td');
//             td.style.border = '1px solid black';
//             td.innerText = text;
//             table.appendChild(td);
//         }
//     }
//     document.body.appendChild(table);
// }
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


