"use strict";


/*==================== FORM VALIDATION =============================== */
$(() => {

    $("#enviar").on("click", confFormValidation);
});

let confFormValidation = () => {
    //establecer nueva regla. Establecemos el nombre del nuevo atributo y lo que va a hacer.
    $.validator.addMethod("regExpEmail", function (value, element, expresion) {
        let reg = new RegExp(expresion);
        return this.optional(element) || reg.test(value)
    })
    $(".contact__form").validate({
        //aspecto de los mensajes
        errorElement: "em", //es una clase propia de la librería
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            error.insertAfter(element);
        },
        //establecer borde al objeto del error
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid")
        },
        unhighlight: function (element) { //validación correcta
            $(element).addClass("is-valid").removeClass("is-invalid")
        },
        rules: {
            //especificamos los objetos a través del atributo name. Siempre se hace así, a través del name.
            name: {
                required: true,
                minlength: 4,
                maxlength: 50
            },
            email: {
                required: true,
                regExpEmail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            },
            project: {
                required: true,
                minlength: 3,
                maxlength: 200
            },
            mensaje: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Este campo es obligatorio. This field is required.",
            },
            email: {
                required: "Este campo es obligatorio. This field is required.",
                regExpNom: "El formato del correo electrónico no es correcto. The format is not correct."
            },
            project: {
                required: "Este campo es obligatorio. This field is required."
            },
            mensaje: {
                required: "Este campo es obligatorio. This field is required."
            }
        },
        submitHandler: () => { //el botón submit va a realizar este evento automáticamente
            if ($(":submit").text() == "Send Message") {

                $(".contact__input").val(""); //limpiar las cajas de texto
                $(".contact__input").removeClass("is-valid").removeClass("is-invalid");
            } else {
                swalAlert("Error", "Ha ocurrido un error. An error has occurred.", "");
            }
        }
    })
};


/*==================== MENU SHOW Y HIDDEN ====================*/
let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
let navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    let navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
let skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((ele) => {
    ele.addEventListener('click', toggleSkills);
});


/*==================== QUALIFICATION TABS ====================*/
let tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active');
    })
});

/*==================== SERVICES MODAL ====================*/
let modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*==================== TESTIMONIAL ====================*/

// let swiperTestimonial = new Swiper(".testimonial__container", {

//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568: {
//             slidesPerView: 2,
//         }
//     }
// });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
let sections = document.querySelectorAll('section[id]')

function scrollActive() {
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    let nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    let scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
let themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== SEND EMAIL WITH NODEMAILER ===================*/
const contactForm = document.getElementById('form__contact');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            swalAlert('success', "¡Email enviado! Email sent!", "");
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        } else {
            swalAlert('error', "Ha ocurrido un error. An error has occurred", "Intenta contactar conmigo a través de mi perfil de LinkedIn. Please, try to contact me on my LinkedIn profile.");
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }
    }

    xhr.send(JSON.stringify(formData));

})


/*==================== SWEET ALERT NOTIFICACIONS  ====================*/

let swalAlert = (icono, titulo, texto) => {
    Swal.fire({
        position: 'bottom',
        icon: icono,
        timer: 2500,
        showConfirmButton: false,
        title: titulo,
        text: texto
    })
}