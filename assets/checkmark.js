
const drops = document.querySelectorAll('#drop');

drops.forEach(drop => {
    const checkmark = drop.getElementsByClassName('checkmark')
    const card = drop.querySelector('#card');

    card.addEventListener('click', () => {
        for (let i = 0; i < checkmark.length; i++)
        checkmark[i].style.display = "block";
        card.style.borderColor = "rgb(116, 105, 238)";
    });

});

function myFunction() {
     setTimeout(() => { window.location.href = "https://www.example.com";}, 1000)}

/* const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const checkmark = card.querySelector('.checkmark');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected'); 

    card.addEventListener('click', () => {
        checkmark.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            })

            option.classList.add('active');

        });
    });
*/