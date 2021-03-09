// - Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
//
// const button = document.getElementById('button');
// const input = document.getElementById('input');
// const letter = document.createElement('p');
// document.body.appendChild(letter);

// function print(x) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(x), Math.floor(Math.random() * 1000) + 100);
//     })
// }

// button.onclick = async function () {
//     for (let i = 0; i < input.value.length; i++) {
//     await print(input.value[i])
//         .then(value => {
//             console.log(value);  
//             letter.innerText = value;          
//         })
//     }      
// }
// //
// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//  За допомогою document.createElement вивести їх в браузер. 
//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             const div = document.createElement('div');
//             const divId = document.createElement('div');
//             divId.innerText = `${user.id}`;
//             div.appendChild(divId);
//             const divName = document.createElement('div');
//             divName.innerText = `${user.name}`;
//             div.appendChild(divName);
//             const divUsername = document.createElement('div');
//             divUsername.innerText = `${user.username}`;
//             div.appendChild(divUsername);
//             const divEmail = document.createElement('div');
//             divEmail.appendChild = `${user.email}`;
//             div.appendChild(divEmail);
//             const divAddress = document.createElement('div');
//             div.appendChild(divAddress);
//             const divStreet = document.createElement('div');
//             divStreet.innerText = `${user.address.street}`;
//             divAddress.appendChild(divStreet);
//             const divSuite = document.createElement('div');
//             divSuite.innerText = `${user.address.suite}`;
//             divAddress.appendChild(divSuite);
//             const divZipcode = document.createElement('div');
//             divZipcode.innerText = `${user.address.zipcode}`;
//             divAddress.appendChild(divZipcode);
//             const divGeo = document.createElement('div');
//             divAddress.appendChild(divGeo);
//             const divLat = document.createElement('div');
//             divLat.innerText = `${user.address.geo.lat}`;
//             divGeo.appendChild(divLat);
//             const divLng = document.createElement('div');
//             divLng.innerText = `${user.address.geo.lng}`;
//             divGeo.appendChild(divLng);
//             document.body.appendChild(div);
//         }
//     })
// //
// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => {
//     for (const post of posts) {
//         const div = document.createElement('div');
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
//         document.body.appendChild(div);
//     }
// })
// //
// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(comments => {
//     for (const comment of comments) {
//         const ul = document.createElement('ul');
//         const liPostId = document.createElement('li');
//         liPostId.innerText = `${comment.postId}`;
//         ul.appendChild(liPostId);
//         const liId = document.createElement('li');
//         liId.innerText = `${comment.id}`;
//         ul.appendChild(liId);
//         const liName = document.createElement('li');
//         liName.innerText = `${comment.name}`;
//         ul.appendChild(liName);
//         const liEmail = document.createElement('li');
//         liEmail.innerText = `${comment.email}`;
//         ul.appendChild(liEmail);
//         const liBody = document.createElement('li');
//         liBody.innerText = `${comment.body}`;
//         ul.appendChild(liBody);
//         document.body.appendChild(ul);
//     }
// })
// //
