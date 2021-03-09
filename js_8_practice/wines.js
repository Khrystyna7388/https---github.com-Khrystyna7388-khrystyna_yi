const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch('https://api.sampleapis.com/wines/reds' + id)
.then(response => {return response.json()})
.then(wine => )
