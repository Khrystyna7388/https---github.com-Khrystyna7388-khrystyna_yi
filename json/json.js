// fetch("https://qr-code6.p.rapidapi.com/?size=250&string=hello%20world", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "72eed211aemsh776f4b081a5e65ap18540cjsnd66137624cce",
// 		"x-rapidapi-host": "qr-code6.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
//
//
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => response.json())
// .then(photos => {
//     for (let i = 0; i < 20; i++) {
//         const element = photos[i];
//         console.log(element);
//         document.write(
//         `<div>
//         <h2>${element.id}, ${element.title}</h2>
//         <img src="${element.url}" alt=""></img>
//         </div>`
//         );
//     }

// });

let array = [{
        name: 'Hrystyna',
        age: 22,
        img: 'https://sun9-13.userapi.com/impf/c623130/v623130343/1663a/J8jPAD51Qe0.jpg?size=463x342&quality=96&proxy=1&sign=1d2e58bbb99a64ac1a23a920209a3409&c_uniq_tag=804XVX-cm2U2FYZ-0dO8LV0zlJ1hfmp0xO43vJucNAI&type=album'
    },
    {
        name: 'Oleksandra',
        age: 44,
        img: 'https://sun9-35.userapi.com/impf/c629320/v629320343/21e60/T_gbPxS3tgM.jpg?size=403x604&quality=96&sign=8755a2fe5dbf61d4a075c665d61a7aaf&c_uniq_tag=qj6y1sV2KixIIWlzsj0BcQaxC8Mi591MwwZZ5061OOo&type=album'
    },
    {
        name: 'Andriy',
        age: 45,
        img: 'https://sun9-12.userapi.com/impf/c622524/v622524343/4afa1/UpUD9KCSM54.jpg?size=130x130&quality=96&sign=cb7094af558f3fdff3c12fdcf14c4258&c_uniq_tag=G0JfJkOQe07EaGcrzDiqaxSCksMqB0BV5auWDY8mEBM&type=album'
    },
    {
        name: "Vika",
        age: 14,
        img: 'https://sun9-52.userapi.com/impf/c622028/v622028343/3e80/CsKNu7Cs7hg.jpg?size=459x604&quality=96&sign=ad6afbb473d834c901a6769e395f4a1e&c_uniq_tag=5taghCf6I3ay0Z0kLbLh7ZGuTIhok-9orKz2efez2i8&type=album'
    }
]
// for (const iterator of array) {
//     document.write(`<div>${iterator.name}</div>`,
// `<div><img src="${iterator.img}" alt=""></div>`
//     );
// }

const xxx = document.querySelector('#xxx');

for (const user of array) {
    xxx.innerHTML += `<div>
        <h1>${user.name}</h1>
        <img src="${user.img}" alt="">
    </div>`   
    xxx.style.color = 'red';
    xxx.classList.add('hihi') 
}

