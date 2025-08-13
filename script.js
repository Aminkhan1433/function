let body = document.querySelector('body');
let light = document.querySelector('.light');

function lightMode() {
    body.style.backgroundColor = 'rgb(251, 206, 151)';

    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = 'black';
    });

    light.style.border = '2px solid black';
}

function darkMode() {
    body.style.backgroundColor = 'black';

    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = 'white';
    });
}


