const div = document.getElementById('div');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    })
    .then(users => {
        // for (const user of users) {
        //     const p = document.createElement('p');
        //     p.innerText = `${user.id} ${user.name} - `;
        //     div.appendChild(p);
        //    const a =  document.createElement('a');
        //    a.innerText = 'details';
        //    a.href = `userDetails.html?data=${JSON.stringify(user)}`;
        //    a.target = '_blanc';
        //    p.appendChild(a);

        for (const user of users) {
            const p = document.createElement('p');
            p.innerText = `${user.id} ${user.name} - `;
            div.appendChild(p);
           const a =  document.createElement('a');
           a.innerText = 'details';
           a.href = `userDetails.html?id=${user.id}`;
           a.target = '_blanc';
           p.appendChild(a);
        }
    })