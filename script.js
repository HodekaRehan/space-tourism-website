

const nav = document.querySelector('#navigation');
const navToggle = document.querySelector('.nav-toggle');

// when someone clicks the hamburger button/menu
navToggle.addEventListener('click', () =>{
    const visibility = nav.getAttribute('data-visible');
    // if the menu is closed, open it
    if(visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        // if the menu is open, close it
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

    console.log(navToggle.getAttribute('aria-expanded'));
})

