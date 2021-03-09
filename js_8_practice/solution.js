const main = document.getElementById('wine')
fetch('https://api.sampleapis.com/wines/reds')
.then(response =>  response.json())
.then(wines => {
    for (const value of wines) {
        const div = document.createElement('div');
        div.innerText = `${value.winery} ${value.wine} ${value.rating.average} ${value.rating.reviews} - `
        main.appendChild(div);
        const a = document.createElement('a');
        a.innerText = 'details';
        a.href = `indexWine.html?id=${value.id}`
        div.appendChild(a);
        document.body.appendChild(main);
    }
})