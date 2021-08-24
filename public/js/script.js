// Faz surgir o menu após determinada altura do scroll
const header = document.querySelector("#header")
const hero = document.querySelector("#hero")

function surgirMenu() {
    const medidasHero = hero.getBoundingClientRect().bottom
    if (medidasHero < 15) {
        header.classList.add('ativo')
    } else {
        header.classList.remove('ativo')
    }
}


// Menu
const icons = document.querySelectorAll('.icon')
const links = document.querySelectorAll('nav a')
const menujs = document.querySelector("#navigation")

icons.forEach(item => {
    item.addEventListener('click', ()=> {
      menujs.classList.toggle('ativo')
    })
})
links.forEach(item => {
  item.addEventListener('click', ()=> {
    menujs.classList.toggle('ativo')
  })
})


/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '120px',
    duration: 800,
    reset: true,
    delay: 25
  })
  
  scrollReveal.reveal(
    `#hero .hero-content h1, #hero .hero-content p, #hero .hero-content a.button,
    #hero .hero-image img, .hero-espace .hero-image, #hero-image,
    #services .services-item img, #services .services-item .content,
    #espace, #espace img, #espace p, #espace a.button,
    #testimonials h2, #testimonials,
    #contact, #contact h2, #contact p, #contact a, #contact ul li,
    #footer
    `,
    { interval: 120 }
  )

// Glider js sliders
const simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider(simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dragVelocity: 1.2,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 1024,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }],
});

window.addEventListener("scroll", function() {
  surgirMenu()
})