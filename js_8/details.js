// const url = new URL(location.href);
// const data = url.searchParams.get('data');
// const user = JSON.parse(data);
// console.log(user);

// const div = document.createElement('div');
// div.innerText = `${user.id} ${user.name} ${user.email} ${user.company.name}`
// document.body.appendChild(div);
//
//
const url = new URL(location.href);
const param = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + param)
.then(response => {return response.json()})
.then(user => {
    console.log(user);
    const div = document.createElement('div');
    div.innerText = `${user.id} ${user.name}`
    document.body.appendChild(div);
})
