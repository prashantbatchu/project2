const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));


const shadowHeader =() =>{
    const header = document.getElementById('header');
    this.scrollY>=50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader);

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    eamiljs.sendForm('service_4gujst2','template_d8sbkqf','#contact-form','c1mxyjllv9FGePWLk')
    .then(()=>{
        contactMessage.textContent='Message sent successfully ✅ ';

        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)
        contactForm.reset();
    },()=>{
        contactMessage.textContent = 'Message not sent (service error) ❌';
    })
}

contactForm.addEventListener('submit',sendEmail)




const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


