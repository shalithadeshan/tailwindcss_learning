const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

const toggle = document.querySelector('#toggle');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

toggle.addEventListener('click', () => {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        // localStorage.removeItem('theme');
        localStorage.theme = 'light'
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
})