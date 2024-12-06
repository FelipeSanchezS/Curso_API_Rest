//alert('validación');
//Llamado a la api
const url= 'https://random-d.uk/api/v2'

fetch(url)
    .then(res => resizeTo.json())
    .then(data => {

        const img = document.querySelector('img');
        img.src = data[0].url;
    });