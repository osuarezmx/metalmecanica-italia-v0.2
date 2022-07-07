/**-----------Menu responsivo------------**/
const navegacionMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-movil");

navToggle.addEventListener("click", () => {
    const visibility = navegacionMenu.getAttribute('data-visible');

    if (visibility === "false") {
        navegacionMenu.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        navegacionMenu.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

/**-----------Menu Sticky------------**/
window.addEventListener("scroll", () => {
    var header = this.document.querySelector(".header");
    header.classList.toggle("menu-sticky",window.scrollY>80);
});

/**-----------Servicios Slider------------**/
function serviciosScrolll() {
    var left = document.querySelector(".servicios-scroll");
    left.scrollBy(300, 0)
};
function serviciosScrollr() {
    var right = document.querySelector(".servicios-scroll");
    right.scrollBy(-300, 0)
};

/**-----------Ver más Sectores------------**/
const sectoresCont = document.querySelector(".sectores-contenido");
const sectoresMobile = document.querySelector(".sectores-mobile");

sectoresMobile.addEventListener("click", () => {
    sectoresCont.classList.toggle("active");
});

/**-----------Especializados------------**/
function scrolll() {
    var left = document.querySelector(".slider-scroll");
    left.scrollBy(295, 0)
};
function scrollr() {
    var right = document.querySelector(".slider-scroll");
    right.scrollBy(-295, 0)
};

// Is in viewport?
const isElementXPercentInViewport = function(el, percentVisible) {
    let rect = el.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
};

/**-----------Animaciones------------**/
const prepararAnimaciones = () => {
    let items = document.querySelectorAll('[data-animacion]');
    for(let i=0; i<items.length; i++) {
        if(items[i].getAttribute('data-animacion') == 'fadeInUp') {
            items[i].style.transform = 'translateY(2rem)';
        }
        if(items[i].getAttribute('data-animacion') == 'fadeInLeft') {
            items[i].style.transform = 'translateX(-10rem)';
        }
        items[i].style.opacity = '0';
        items[i].classList.add('animaciones-activado');
    }
}
document.addEventListener('DOMContentLoaded', prepararAnimaciones);

const iniciarAnimaciones = () => {
    let items = document.querySelectorAll('.animaciones-activado');
    for(let i=0; i<items.length; i++) {
        if(isElementXPercentInViewport(items[i], 50)) {
            if(items[i].getAttribute('data-animacion') == 'fadeInUp') {
                items[i].style.transform = '';
            }
            if(items[i].getAttribute('data-animacion') == 'fadeInLeft') {
                items[i].style.transform = '';
            }
            items[i].style.opacity = '';
            setTimeout(function() { items[i].classList.remove('.animaciones-activado'); },700);
        }
    }
}
document.addEventListener('scroll', iniciarAnimaciones);